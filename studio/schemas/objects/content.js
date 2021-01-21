export default {
  title: 'Inhalt',
  name: 'content',
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
}
