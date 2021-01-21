export default {
  title: 'Bild',
  name: 'pic',
  type: 'object',
  preview: {
    select: {
      media: 'pic', // Use the userPortait image field as thumbnail
    },
  },
  fields: [
    {
      title: 'Bilddatei',
      name: 'pic',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: 'Bildunterschrift',
      name: 'caption',
      type: 'content',
    },
    {
      title: 'Alt-Titel',
      name: 'alt',
      type: 'string',
    },
  ],
}
