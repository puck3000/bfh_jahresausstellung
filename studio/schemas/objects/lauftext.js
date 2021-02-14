import { AiOutlineFileText } from 'react-icons/ai'

export default {
  name: 'lauftext',
  title: 'Lauftext',
  type: 'object',
  icon: AiOutlineFileText,
  fields: [
    {
      name: 'inhalt',
      title: 'Inhalt',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Titel', value: 'h1' },
            { title: 'Untertitel', value: 'h2' },
            { title: 'Lead', value: 'blockquote' },
          ],
        },
      ],
    },
    {
      name: 'laufweite',
      title: 'Kompakt',
      type: 'boolean',
      decription:
        'hier kann die kompakte Darstellung des Textblocks aktiviert werden.',
    },
  ],
}
