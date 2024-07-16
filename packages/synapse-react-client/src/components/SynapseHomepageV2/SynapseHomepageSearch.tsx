import React, { useState } from 'react'
import { PopperProps } from '@mui/material'
import { FormControl } from '@mui/material'
import { InputAdornment } from '@mui/material'
import { Search } from '../../assets/themed_icons'

import { Autocomplete } from '@mui/material'
import { SynapseConstants } from 'src/utils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { useGetQueryResultBundleWithAsyncStatus } from '../../synapse-queries'
import { TextField } from '@mui/material'
import { Popper } from '@mui/material'
import { styled } from '@mui/material'
import { Box } from '@mui/material'

export const onSearch = (value: string) => {
  window.location.assign(`/Search:${encodeURIComponent(value)}`)
}

export type SynapseHomepageSearchProps = {
  sourceTable: string
}

const boxShadow =
  '0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(0, 0, 0, 0.05)'
const StyledPopper = styled(Popper)(() => ({
  '& .MuiAutocomplete-paper': {
    borderRadius: '0px 0px 40px 40px',
    p: '0px 20px 20px 20px',
    boxShadow,
  },
}))

const PopperAlwaysPlacedBelow = (props: PopperProps) => {
  // Modifier necessary to force placement to remain on the bottom of the anchor element, despite not having enough space to render
  return (
    <StyledPopper
      {...props}
      placement="bottom"
      modifiers={[{ name: 'flip', enabled: false }]}
    />
  )
}

export const SynapseHomepageSearch: React.FunctionComponent<
  SynapseHomepageSearchProps
> = ({ sourceTable }) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false)
  const partMask = SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
  const request: QueryBundleRequest = {
    partMask,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: sourceTable,
    query: {
      sql: `SELECT * FROM ${sourceTable}`,
      limit: 10,
    },
  }
  const { data: queryResultResponse, isLoading } =
    useGetQueryResultBundleWithAsyncStatus(request)

  const rowSet = queryResultResponse?.responseBody?.queryResult?.queryResults
  const headers = rowSet?.headers
  const topSearchedColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'top_searched',
  )!
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <Autocomplete
        freeSolo
        disableClearable
        options={
          rowSet && !isLoading
            ? rowSet.rows.map(row => row.values[topSearchedColIndex] ?? '')
            : ['...']
        }
        onChange={(_event, newValue: string | null) => {
          onSearch(newValue ?? '')
        }}
        onOpen={() => setIsPopperOpen(true)}
        onClose={() => setIsPopperOpen(false)}
        PopperComponent={PopperAlwaysPlacedBelow}
        groupBy={() => 'Most popular searches'}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Search Synapse"
            InputProps={{
              ...params.InputProps,
              sx: {
                fontSize: '24px',
                borderRadius: isPopperOpen ? '40px 40px 0px 0px' : '40px',
                backgroundColor: 'white',
                boxShadow,
              },
              startAdornment: (
                <InputAdornment position="start">
                  <Box
                    sx={{
                      ml: '15px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Search size={32} fill="#38756A" />
                  </Box>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </FormControl>
  )
}
