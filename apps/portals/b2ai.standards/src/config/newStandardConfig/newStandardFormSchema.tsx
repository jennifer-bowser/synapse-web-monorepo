export const newStandardFormSchema = {
  title: 'Contribute A Standard',
  'type:': 'object',
  required: [
    'type',
    'shortName',
    'extendedName',
    'contributorName',
    'contributorOrcid',
  ],
  properties: {
    type: {
      type: 'string',
      title: 'Entity Type',
      enum: [
        'Data Standard or Tool',
        'Data Substrate',
        'Data Topic',
        'Organization',
        'Use Case',
      ],
    },
    category: {
      type: 'string',
      title: 'Category',
    },
    shortName: {
      type: 'string',
      title: 'Short Name',
    },
    extendedName: {
      type: 'string',
      title: 'Extended Name',
    },
    purposeDetail: {
      type: 'string',
      title: 'Purpose Detail',
    },
    subclassOf: {
      type: 'string',
      title: 'Subclass Of',
    },
    relatedTo: {
      type: 'string',
      title: 'Related To',
    },
    contributorName: {
      type: 'string',
      title: 'Contributor Name',
    },
    contributorGithub: {
      type: 'string',
      title: 'Contributor GitHub',
    },
    contributorOrcid: {
      type: 'string',
      title: 'Contributor ORCID',
    },
  },
}
