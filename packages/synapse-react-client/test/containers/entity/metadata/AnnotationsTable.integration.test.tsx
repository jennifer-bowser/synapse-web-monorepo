import { render, screen } from '@testing-library/react'
import React from 'react'
import {
  AnnotationsTable,
  AnnotationsTableProps,
} from '../../../../src/components/entity/metadata/AnnotationsTable'
import { createWrapper } from '../../../../src/testutils/TestingLibraryUtils'
import { ENTITY_JSON } from '../../../../src/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../src/utils/functions/getEndpoint'
import { SynapseContextType } from '../../../../src/utils/context/SynapseContext'
import mockFileEntityData from '../../../../src/mocks/entity/mockFileEntity'
import { mockSchemaBinding } from '../../../../src/mocks/mockSchema'
import { MOCK_CONTEXT_VALUE } from '../../../../src/mocks/MockSynapseContext'
import { rest, server } from '../../../../src/mocks/msw/server'

const { id: MOCK_FILE_ENTITY_ID, json: mockFileEntityJson } = mockFileEntityData

const defaultProps: AnnotationsTableProps = {
  entityId: MOCK_FILE_ENTITY_ID,
}

function renderComponent(wrapperProps?: SynapseContextType) {
  render(<AnnotationsTable {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('AnnotationsTable tests', () => {
  // Handle the msw lifecycle:
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders the annotations on an entity', async () => {
    renderComponent()
    await screen.findByText('myStringKey')
    screen.getByText(mockFileEntityJson['myStringKey']! as string)

    expect(() => screen.getByText('myIntegerKey')).not.toThrowError()
    screen.getByText(
      (mockFileEntityJson['myIntegerKey'] as number[]).join(', '),
    )

    expect(() => screen.getByText('myFloatKey')).not.toThrowError()
    screen.getByText((mockFileEntityJson['myFloatKey'] as number[]).join(', '))
  })

  it('Displays the validation schema if there is one (in experimental mode)', async () => {
    renderComponent({
      ...MOCK_CONTEXT_VALUE,
      isInExperimentalMode: true,
    })

    await screen.findByText('Validation Schema')
    await screen.findByText(mockSchemaBinding.jsonSchemaVersionInfo.schemaName)
  })

  it('Displays a placeholder when there are no annotations', async () => {
    server.use(
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
          ':entityId',
        )}`,

        async (req, res, ctx) => {
          const response = mockFileEntityJson
          // Delete the annotation keys
          delete response.myStringKey
          delete response.myIntegerKey
          delete response.myFloatKey
          return res(ctx.status(200), ctx.json(response))
        },
      ),
    )
    renderComponent()
    await screen.findByText('This Project has no annotations.')
  })
})
