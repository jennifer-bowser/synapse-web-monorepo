import * as React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faEllipsisV, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getColor } from './getUserData'
import { UserProfile } from '../utils/jsonResponses/UserProfile'
import UserCardContextMenu, { MenuAction } from './UserCardContextMenu'
import { UserCardLarge } from './UserCardLarge'

library.add(faCircle)
library.add(faEllipsisV)
library.add(faCopy)

type UserBadgeViewProps = {
  userProfile: UserProfile
  menuActions?: MenuAction []
  isLarge?: boolean
  profileClickHandler?: (userProfile: UserProfile) => void
}

// Disable function name because compiler has to know that its a React class
// tslint:disable-next-line:function-name
export function UserCardMedium(
    { userProfile, menuActions, profileClickHandler, isLarge = false }: UserBadgeViewProps
  ) {
  const htmlDivRef = React.useRef<HTMLDivElement>(null)
  const [showModal, setShowModal] = React.useState(false)
  const [isContextMenuOpen, setShowContextMenu] = React.useState(false)

  /**
   * Function handles copying to clipboard the user's email address
   *
   * @param {string} value the email address of the user
   * @returns
   */
  function copyToClipboard(value: string) {
    return function _copyToClipboard(_e: any) {
      // https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
      // this copies the email to the clipoard
      const el = document.createElement('textarea')
      el.value = value
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      htmlDivRef.current!.appendChild(el)
      el.select()
      document.execCommand('copy')
      htmlDivRef.current!.removeChild(el)
      // show modal and hide after 4 seconds, the timing is per Material Design
      setShowModal(true)
      // hide after 4 seconds
      setTimeout(
        () => {
          setShowModal(false)
        },
        4000
      )
    }
  }

  function toggleContextMenu(_event: any) {
    setShowContextMenu(!isContextMenuOpen)
  }

  const {
    displayName,
    userName,
    firstName,
    lastName,
    position
  } = userProfile
  const diameter = 80
  let img
  let name = ''
  const link = `https://www.synapse.org/#!Profile:${userProfile.ownerId}`
  // link is overriden by custom click handler
  const email = `${userName}@synapse.org`
  // call the click handler with userProfile handed to it -- only if its defined
  const profileClickHandlerWithParam = profileClickHandler && (() => profileClickHandler(userProfile))
  if (displayName) {
    name = displayName
  } else if (firstName && lastName) {
    name = (firstName + lastName)
  }
  if (userName) {
    name = userName
  }
  if (userProfile.preSignedURL) {
    img = (
      <img
        style={{ borderRadius: '50%', padding: '5px', marginLeft: '26px' }}
        width={diameter}
        height={diameter}
        key={userProfile.preSignedURL}
        alt="User Profile"
        src={userProfile.preSignedURL}
      />
    )
  } else {
    img = (
      <svg style={{ marginLeft: '26px' }} height={diameter} width={diameter}>
        <circle
          r={diameter / 2}
          cx={'50%'}
          cy={'50%'}
          fill={getColor(userProfile.userName)}
        />
        <text
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={26}
          x={'50%'}
          y={'50%'}
          fill={'white'}
        >
          {userProfile.firstName[0] || userProfile.userName[0]}
        </text>
      </svg>
    )
  }
  const mediumCard = (
    <React.Fragment>
      <TransitionGroup>
      {
        showModal
        &&
        <CSSTransition
          key={email}
          classNames="SRC-card"
          timeout={{ enter: 500, exit: 300 }}
        >
        <div key={link} className="SRC-modal"> Copied text to clipboard! </div>
        </CSSTransition>
      }
      </TransitionGroup>
      {img}
      <div className="SRC-cardContent">
        <p className="SRC-eqHeightRow">
          {/* if its a medium component the header should be clickable, if its large then it should NOT be clickable */}
          {isLarge ? <span className="SRC-whiteText"> {name} </span> :  (
              <a
                onClick={profileClickHandlerWithParam ? profileClickHandlerWithParam : undefined}
                className={'SRC-hand-cursor SRC-primary-text-color'}
              >
                {name}
              </a>
            )}
        </p>
        {
          position &&
          <p className={`${isLarge ? 'SRC-whiteText' : ''} SRC-eqHeightRow`}>
            {position}
          </p>
        }
        <p
          className={`
            ${isLarge ? 'SRC-whiteText' : 'SRC-primary-text-color'}
            SRC-hand-cursor SRC-showGrayOnHover SRC-eqHeightRow SRC-inlineFlex
          `}
          onClick={copyToClipboard(email)}
          ref={htmlDivRef}
        >
          {userName}@synapse.org
          <FontAwesomeIcon
            style={{ marginLeft: '4px' }}
            color={isLarge ? 'white' : 'lightgray'}
            icon="copy"
          />
        </p>
      </div>
      <span
        role={'button'}
        className={`
          SRC-extraPadding SRC-hand-cursor SRC-primary-background-color-hover SRC-inlineBlock SRC-cardMenuButton
          ${isContextMenuOpen ? 'SRC-primary-background-color' : ''}
        `}
        onClick={toggleContextMenu}
      >
        <FontAwesomeIcon
          className={isContextMenuOpen || isLarge ? 'SRC-whiteText' : 'SRC-primary-text-color'}
          icon="ellipsis-v"
        />
        {
          isContextMenuOpen
          &&
          <UserCardContextMenu menuActions={menuActions} userProfile={userProfile}/>
        }
      </span>
    </React.Fragment>
  )

  if (!isLarge) {
    return (
      <div
        style={{ border: '1px solid #DDDDDF' }}
        className={`SRC-userCard SRC-userCardMediumUp ${isContextMenuOpen ? 'SRC-hand-cursor' : ''}`}
        onClick={isContextMenuOpen ? toggleContextMenu : undefined}
      >
        {mediumCard}
      </div>
    )
  }
  // when the component is large we have to set the click handler to wrap both the top and bottom portion
  return (
    <div
      style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
      className={isContextMenuOpen ? 'SRC-hand-cursor' : ''}
      onClick={isContextMenuOpen ? toggleContextMenu : undefined}
    >
      <div className={`SRC-primary-background-color SRC-userCard SRC-userCardMediumUp ${isContextMenuOpen ? 'SRC-hand-cursor' : ''}`}>
        {mediumCard}
      </div>
      {isLarge ? <UserCardLarge userProfile={userProfile}/> : false}
    </div>
  )
}
