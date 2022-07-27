import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { OAuthClient, OAuthClientList } from '../../../synapseTypes/OAuthClient'

export function useGetOAuthClientInfinite(
  options?: UseInfiniteQueryOptions<OAuthClientList, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  return useInfiniteQuery<OAuthClientList, SynapseClientError>(
    ['oAuthclient', accessToken],
    async context =>
      await SynapseClient.getOAuth2(accessToken!, context.pageParam),
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}

export function useDeleteOAuthClient(
  options?: UseMutationOptions<void, SynapseClientError, string>,
) {
  const queryClient = useQueryClient()
  const { accessToken } = useSynapseContext()

  return useMutation<void, SynapseClientError, string>(
    (clientId: string) =>
      SynapseClient.deleteOAuthClient(clientId, accessToken!),
    {
      ...options,
      onSuccess: async (updatedClient, clientId, ctx) => {
        await queryClient.invalidateQueries()
        if (options?.onSuccess) {
          await options.onSuccess(updatedClient, clientId, ctx)
        }
      },
    },
  )
}

export function useMutateOAuthClient(
  options?: UseMutationOptions<OAuthClient, SynapseClientError, OAuthClient>,
) {
  const queryClient = useQueryClient()
  const { accessToken } = useSynapseContext()

  const update = (props: {
    client: OAuthClient
    action: 'UPDATE' | 'CREATE'
  }): Promise<OAuthClient> => {
    const { client, action } = props
    switch (action) {
      case 'UPDATE':
        return SynapseClient.updateOAuthClient(client, accessToken!)
      case 'CREATE':
        return SynapseClient.createOAuthClient(client, accessToken!)
      default:
        throw Error('Unknown action')
    }
  }

  return useMutation(update, {
    onSuccess: async (updatedClient, variables, ctx) => {
      await queryClient.invalidateQueries()
      if (options?.onSuccess) {
        await options.onSuccess(updatedClient, variables.client, ctx)
      }
    },
  })
}
