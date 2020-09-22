import * as React from 'react'
import Plotly from 'plotly.js-basic-dist'
import * as PlotlyTyped from 'plotly.js'
import createPlotlyComponent from 'react-plotly.js/factory'
import { SizeMe } from 'react-sizeme'

import { QueryWrapperChildProps } from '../../../containers/QueryWrapper'
import {
  FacetColumnResultValues,
  ColumnType,
  FacetColumnResult,
  FacetColumnResultValueCount,
} from '../../../utils/synapseTypes'

// import getColorPallette from '../../../containers/ColorGradient'

import { unCamelCase } from '../../../utils/functions/unCamelCase'
import { useEffect, useState } from 'react'
import loadingScreen from '../../LoadingScreen'
import { GraphData, extractPlotDataArray, getPlotStyle, renderLegend } from '../../widgets/facet-nav/FacetNavPanel'
import { getFacets } from '../../widgets/facet-nav/FacetNav'

const Plot = createPlotlyComponent(Plotly)

export type FacetPlotsCardOwnProps = {
  rgbIndex?: number
  facetsToPlot?: string[]
}

type FacetPlotsCardProps = FacetPlotsCardOwnProps & QueryWrapperChildProps

const layout: Partial<PlotlyTyped.Layout> = {
  showlegend: false,
  annotations: [],
  margin: { l: 0, r: 0, b: 0, t: 0, pad: 0 },
  yaxis: {
    visible: false,
    showgrid: false,
  },
  xaxis: {
    visible: false,
    showgrid: false,
  },
}

const FacetPlotsCard: React.FunctionComponent<FacetPlotsCardProps> = ({
  isLoadingNewData,
  // rgbIndex,
  facetsToPlot,
  data,
  isLoading,
  facetAliases
}: FacetPlotsCardProps): JSX.Element => {
  const [facetPlotDataArray, setFacetPlotDataArray] = useState<GraphData[]>([])
  const [selectedFacetValue, setSelectedFacetValue] = useState<string>('')
  
  const getColumnType = (facetToPlot:FacetColumnResult): ColumnType | undefined =>
    data?.columnModels?.find(
      columnModel => columnModel.name === facetToPlot.columnName,
    )?.columnType as ColumnType

  useEffect(() => {
    if (!facetsToPlot || !data) {
      return
    } else {
      const facetsDataToPlot = getFacets(data, facetsToPlot)
      const newPlotData = new Array(facetsDataToPlot.length).fill({})
      facetsDataToPlot.map((item, index) => {
        const plotData = extractPlotDataArray(
          item as FacetColumnResultValues,
          getColumnType(item),
          index,
          'PIE',
        )
        newPlotData[index] = plotData
      })
      setFacetPlotDataArray(newPlotData)
      // ASSUMPTION: One facet column value is selected (locked down).  For example, facet column "study" with value "ROSMAP"
      const selectedFacet:FacetColumnResultValueCount|undefined = data?.facets?.map(item => {
        return (item as FacetColumnResultValues).facetValues.filter(facetValue => {
          return facetValue.isSelected
        })[0]
      })[0]
      if (selectedFacet && selectedFacet.value) {
        setSelectedFacetValue(selectedFacet?.value)
      }
    }
  }, [facetsToPlot, data])

  if (isLoadingNewData || !facetPlotDataArray) {
    return (
      <div className="SRC-loadingContainer SRC-centerContentColumn">
        {loadingScreen}
      </div>
    )
  } else {
    return (
      <div className="FacetPlotsCard">
        <div className="FacetPlotsCard__title">
          <span className="FacetNavPanel__title__name">
            {unCamelCase(selectedFacetValue, facetAliases)}
          </span>
          {isLoading && (
            <span style={{ marginLeft: '2px' }} className={'spinner'} />
          )}
        </div>
        <div className="FacetPlotsCard__body">
          {/* create a plot for every facet to be plotted */}
          {facetPlotDataArray.map((plotData, index) => {
            return <div>
              <SizeMe monitorHeight>
                {({ size }) => (
                  <div className="FacetPlotsCard__body__plot">
                    <Plot
                      key={`${facetsToPlot![index]}-${size.width}`}
                      layout={layout}
                      data={plotData?.data ?? []}
                      style={getPlotStyle(
                        size.width,
                        'BAR',
                        150,
                      )}
                      config={{ displayModeBar: false }}                  
                    ></Plot>
                  </div>
                )}
              </SizeMe>
              {renderLegend(plotData?.labels, plotData?.colors, false)}
            </div>
          })}

        </div>
      </div>
    )
  }
}

export default FacetPlotsCard
