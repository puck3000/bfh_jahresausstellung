export default {
  name: 'inhalt',
  title: 'inhalt',
  type: 'array',
  options: {
    editModal: 'fullscreen',
  },
  of: [
    { type: 'anchor' },
    { type: 'lauftext' },
    { type: 'textandimage' },
    { type: 'linkedpic' },
    { type: 'gallery' },
    { type: 'metatext' },
    { type: 'horzline' },
    { type: 'abstand' },
    { type: 'youtube' },
    { type: 'akkordeon' },
    { type: 'muxvideo' },
    {
      name: 'download',
      title: 'Download',
      type: 'file',
      fields: [{ name: 'label', type: 'string', title: 'label' }],
      fieldset: 'main',
    },
  ],
}
