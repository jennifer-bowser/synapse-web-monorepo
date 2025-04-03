import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import React, { Suspense, useEffect } from 'react'
import { useGetEntity } from '../../synapse-queries/'
import { SynapseConstants } from '../../utils'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'
import { FolderDownloadConfirmation } from '../download_list/FolderDownloadConfirmation'
import { TableQueryDownloadConfirmation } from '../download_list/TableQueryDownloadConfirmation'
import { QueryWrapper } from '../QueryWrapper'
import { QueryWrapperErrorBoundary } from '../QueryWrapperErrorBoundary'

/**
 * Props for the AddToDownloadCartButton component.
 *
 * @property entityId - The ID of the entity to be added to the download cart.
 * @property buttonText - Optional text to display on the button. Defaults to a standard label if not provided.
 */
export type AddToDownloadCartButtonProps = {
  entityId: string
  buttonText?: string
  onIsLoadingChange: (isLoading: boolean) => void
  handleClose: () => void
}

const QueryWrapperTableDownloadConfirmation: React.FC<{
  entityId: string
  onHide: () => void
}> = ({ entityId, onHide }) => {
  const initQueryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: entityId,
    query: {
      sql: `select * from ${entityId}`,
      limit: DEFAULT_PAGE_SIZE,
      sort: undefined,
      additionalFilters: undefined,
    },
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  }

  return (
    <Suspense fallback={<></>}>
      <QueryWrapper initQueryRequest={initQueryRequest}>
        <QueryWrapperErrorBoundary>
          <TableQueryDownloadConfirmation onClose={onHide} />
        </QueryWrapperErrorBoundary>
      </QueryWrapper>
    </Suspense>
  )
}

/**
 * A button component that allows users to add an entity to the download cart.
 * Depending on the type of entity, it displays a confirmation dialog for either
 * downloading a folder or downloading a table/query.
 *
 * @param {AddToDownloadCartButtonProps} props - The properties for the component.
 * @param {string} props.entityId - The ID of the entity to be added to the download cart.
 * @param {string} [props.buttonText='Download'] - The text to display on the button.
 *
 * @returns {JSX.Element} The rendered AddToDownloadCartButton component.
 */
export function AddToDownloadCartButton({
  entityId,
  buttonText = 'Download',
  handleClose,
  onIsLoadingChange,
}: AddToDownloadCartButtonProps) {
  const { data: entity, isLoading } = useGetEntity(entityId)
  const entityConcreteType = entity?.concreteType

  useEffect(() => {
    onIsLoadingChange(isLoading)
  }, [isLoading, onIsLoadingChange])

  if (isLoading || (!isLoading && entity)) {
    if (
      entityConcreteType !== 'org.sagebionetworks.repo.model.Folder' &&
      entityConcreteType !==
        'org.sagebionetworks.repo.model.table.TableEntity' &&
      entityConcreteType !== 'org.sagebionetworks.repo.model.table.Dataset'
    ) {
      return <></>
    }
  }

  return (
    <div>
      {entityConcreteType === 'org.sagebionetworks.repo.model.Folder' ? (
        <FolderDownloadConfirmation folderId={entityId} fnClose={handleClose} />
      ) : (
        <QueryWrapperTableDownloadConfirmation
          entityId={entityId}
          onHide={handleClose}
        />
      )}
    </div>
  )
}

export default AddToDownloadCartButton
