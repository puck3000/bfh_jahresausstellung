export default {
  name: 'abstand',
  title: 'Vertikaler Abstand',
  type: 'object',
  fields: [
    {
      name: 'marginBottom',
      title: 'Vertikaler Abstand',
      type: 'string',
      options: {
        list: ['kleiner Abstand', 'grosser Abstand'],
        layout: 'radio',
      },
    },
  ],
}
