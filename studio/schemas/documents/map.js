export default {
  name: 'map',
  title: 'Map',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Inhalt',
      name: 'content',
      type: 'inhalt',
    },
  ],
}