import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import { QueryWrapperChildProps } from './QueryWrapper'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCaretDown,
  faCaretUp,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { insertConditionsFromSearchParams } from '../utils/functions/sqlFunctions'
import { unCamelCase } from '../utils/functions/unCamelCase'
import { ColumnModel, ColumnType } from '../utils/synapseTypes'
import { Searchable } from './Search'

library.add(faCaretDown)
library.add(faCaretUp)
library.add(faSearch)
library.add(faTimes)

type SearchState = {
  show: boolean
  searchText: string
  columnName: string
}

export type SearchV2Props = {
  isQueryWrapperMenuChild?: boolean
  defaultColumn?: string
  searchable?: Searchable
}

type InternalSearchProps = QueryWrapperChildProps & SearchV2Props

class Search extends React.Component<InternalSearchProps, SearchState> {
  public searchFormRef: React.RefObject<HTMLFormElement>
  public radioFormRef: React.RefObject<HTMLFormElement>

  constructor(props: InternalSearchProps) {
    super(props)
    this.state = {
      show: false,
      searchText: '',
      columnName: this.props.defaultColumn ?? '',
    }
    this.searchFormRef = React.createRef()
    this.radioFormRef = React.createRef()
  }

  componentDidMount() {
    // @ts-ignore
    document.addEventListener('click', this.handleClickOutsideForm)
  }

  componentWillUnmount() {
    // @ts-ignore
    document.removeEventListener('click', this.handleClickOutsideForm)
  }

  handleClickOutsideForm = (event: React.SyntheticEvent) => {
    if (
      // @ts-ignore
      !this.searchFormRef.current?.contains(event?.target) &&
      // @ts-ignore
      !this.radioFormRef.current?.contains(event?.target)
    ) {
      this.setState({
        show: false,
      })
    }
  }

  public toggleDropdown = (value: boolean) => (_: React.SyntheticEvent) => {
    this.setState({
      show: value,
    })
  }

  public static addEscapeCharacters = (searchText: string) => {
    // We have to escape the following characters
    // ' % \
    let escapedSearchText = searchText
    // escape ' by adding additional '
    escapedSearchText = escapedSearchText.split("'").join("''")
    // escape % by adding \
    escapedSearchText = escapedSearchText.split('%').join(`\%`)
    // escape \ by adding \
    escapedSearchText = escapedSearchText.split('\\').join('\\\\')
    return escapedSearchText
  }

  public search = (event: React.SyntheticEvent<HTMLFormElement>) => {
    // form completion by default causes the page to reload, so we prevent that
    event.preventDefault()
    const { searchText } = this.state
    let { columnName } = this.state
    if (columnName === '') {
      // default to the first one, will always be defined
      columnName = this.props.data?.columnModels?.[0].name ?? ''
    }
    this.setState({
      show: false,
    })
    const {
      updateParentState,
      getInitQueryRequest,
      executeQueryRequest,
      getLastQueryRequest,
    } = this.props

    const lastQueryRequest = getLastQueryRequest!()

    // Always grabs initQueryRequest to get version of the sql
    const initQueryRequestDeepCopy = getInitQueryRequest!()
    const { sql } = initQueryRequestDeepCopy.query
    const searchParams = {
      [columnName]: Search.addEscapeCharacters(searchText),
    }
    const newSql = insertConditionsFromSearchParams(searchParams, sql)
    lastQueryRequest.query.sql = newSql
    executeQueryRequest!(lastQueryRequest)
    const searchQuery = {
      columnName: !searchText ? '' : columnName,
      searchText,
    }
    updateParentState!({ searchQuery })
  }

  public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      searchText: event.currentTarget.value,
    })
  }

  public isSupportedColumnAndInProps = (
    columnModel: ColumnModel,
    searchable?: Searchable,
  ) => {
    switch (columnModel.columnType) {
      case ColumnType.FILEHANDLEID:
      case ColumnType.ENTITYID:
      case ColumnType.DATE:
      case ColumnType.DATE_LIST:
      case ColumnType.USERID:
        return false
      default:
        if (searchable) {
          return searchable.find(el => el.columnName === columnModel.name)
        }
        return true
    }
  }

  render() {
    const { data, topLevelControlsState, facetAliases, searchable } = this.props
    const { searchText, show } = this.state

    return (
      <div className="SearchV2">
        <CSSTransition
          in={topLevelControlsState?.showSearchBar}
          classNames="SearchV2__animate_bar"
          timeout={{ enter: 0, exit: 300 }}
        >
          <div className="SearchV2__animate_height">
            <form
              className="SearchV2__searchbar"
              onSubmit={this.search}
              onClick={() => {
                this.setState({ show: true })
                this.searchFormRef.current?.focus()
              }}
              ref={this.searchFormRef}
            >
              <FontAwesomeIcon
                className="SearchV2__searchbar__searchicon"
                size={'sm'}
                icon={'search'}
              />
              <input
                onChange={this.handleChange}
                onClick={() => {
                  this.setState({
                    show: true,
                  })
                }}
                placeholder="Enter Search Terms"
                value={searchText}
                type="text"
              />
              {this.state.searchText.length > 0 && (
                <button
                  className="SearchV2__searchbar__clearbutton"
                  type="button"
                  onClick={() => {
                    this.setState({
                      searchText: '',
                    })
                  }}
                >
                  <FontAwesomeIcon
                    className="SRC-primary-text-color"
                    icon="times"
                  />
                </button>
              )}
            </form>
          </div>
        </CSSTransition>
        <div className="SearchV2__dropdown_pos">
          <CSSTransition
            in={show}
            classNames="SearchV2__animate_dropdown"
            timeout={{ enter: 0, exit: 300 }}
          >
            <form
              ref={this.radioFormRef}
              className="SearchV2__column-select SearchV2__animate_height"
            >
              <p className="deemphasized">
                <i> Search In Field: </i>
              </p>
              {data?.columnModels
                ?.filter(el => this.isSupportedColumnAndInProps(el, searchable))
                .map((el, index) => {
                  const name = el.name
                  const displayName = unCamelCase(el.name, facetAliases)
                  const selectedColumn = this.state.columnName
                  const isSelected =
                    (selectedColumn === '' && index === 0) ||
                    selectedColumn === name
                  const placeholder =
                    searchable?.find(search => search.columnName === el.name)
                      ?.hintText ?? ''
                  return (
                    <div className="radio">
                      <label>
                        <span>
                          <input
                            id={name}
                            type="radio"
                            value={name}
                            checked={isSelected}
                            placeholder={placeholder}
                            onClick={() => {
                              this.setState({
                                columnName: name,
                              })
                            }}
                          />
                          <span>{displayName}</span>
                        </span>
                      </label>
                    </div>
                  )
                })}
            </form>
          </CSSTransition>
        </div>
      </div>
    )
  }
}

export default Search
