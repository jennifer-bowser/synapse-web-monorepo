import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import React from 'react'
import {
  CardContainerLogic,
  DatasetJsonLdScript,
  QueryWrapperPlotNav,
} from 'synapse-react-client'
import columnAliases from '../config/columnAliases'
import { datasetsSql } from '../config/resources'
import { datasetCardConfiguration } from '../config/synapseConfigs/datasets'

export function DatasetDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()
  return (
    <>
      <CardContainerLogic
        {...datasetCardConfiguration}
        sql={datasetsSql}
        isHeader
        searchParams={searchParams}
      />
      <DetailsPage
        sql={datasetsSql}
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
        ContainerProps={{
          maxWidth: 'xl',
        }}
      >
        <DatasetJsonLdScript entityId={searchParams.id} />
        <DetailsPageContent
          content={[
            {
              title: 'Description',
              id: 'Description',
              element: (
                <MarkdownSynapseFromColumnData
                  columnName={'datasetDescription'}
                />
              ),
            },
            {
              title: 'Acknowledgment',
              id: 'Acknowledgment',
              element: (
                <MarkdownSynapseFromColumnData
                  columnName={'acknowledgmentStatement'}
                />
              ),
            },
            {
              title: 'Files',
              id: 'Files',
              element: (
                <DetailsPageContextConsumer>
                  {({ context }) => {
                    if (!context.rowData) {
                      return null
                    }
                    const hasVersionNumber = Boolean(
                      context.rowData?.versionNumber,
                    )
                    const sql = `SELECT * FROM syn${context.rowData?.rowId}${
                      hasVersionNumber
                        ? `.${context.rowData?.versionNumber}`
                        : ''
                    }`
                    return (
                      <QueryWrapperPlotNav
                        rgbIndex={0}
                        sql={sql}
                        visibleColumnCount={7}
                        tableConfiguration={{
                          showAccessColumn: true,
                          showDownloadColumn: true,
                        }}
                        shouldDeepLink={false}
                        columnAliases={columnAliases}
                        defaultShowPlots={false}
                      />
                    )
                  }}
                </DetailsPageContextConsumer>
              ),
            },
          ]}
        />
      </DetailsPage>
    </>
  )
}
