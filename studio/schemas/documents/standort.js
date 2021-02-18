export default {
  name: 'standort',
  title: 'Standort',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string',
    },
    {
      title: 'Koordinaten',
      name: 'coordinates',
      type: 'coordinates',
    },
    {
      title: 'Themenpfad',
      name: 'themenpfad',
      type: 'reference',
      to: [{ type: 'themenpfad' }],
    },
  ],
}
