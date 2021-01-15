export default {
    name: 'inhalt',
    title: 'inhalt',
    type: 'array',
    options: {
        editModal: 'fullscreen',
    },
    of: [
        { type: 'anchor'},
        { type: 'lauftext' },
        { type: 'textandimage' },
        { type: 'linkedpic' },
        { type: 'gallery' },
        { type: 'metatext'}
    //   { type: 'embeddedvideo' },
        ],
}