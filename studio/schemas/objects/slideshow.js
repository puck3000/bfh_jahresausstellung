import { BiImages } from 'react-icons'

export default {
  name: 'slideshow',
  title: 'slideshow',
  description: 'Hier können Bilder für die Gallerie bestimmt werden.',
  icon: BiImages,
  type: 'object',
  fields: [{ name: 'slide', title: 'Slides', type: 'images' }],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: `Gallerie`,
      }
    },
  },
}
