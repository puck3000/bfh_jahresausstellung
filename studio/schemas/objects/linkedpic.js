import {BiImage} from 'react-icons/bi'
export default {
  name: 'linkedpic',
  title: 'Einzelbild',
  type: 'object',
  icon: BiImage,
  fields: [
    {
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
          { name: 'alt', title: 'Alt-Text', type: 'string'}
      ]
    },
    {
      name: 'caption',
      title: 'Bildlegende',
      type: 'array',
      of: [
        {type: 'block'}
      ],
    },
  ],
}