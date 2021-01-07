export default {
    name: 'inhalt',
    title: 'inhalt',
    type: 'array',
    description: 'Hier können die Inhalte erfasst werden.',
    of: [
        { type: 'anchor'},
        { type: 'lauftext' },
        { type: 'textandimage' },
        { type: 'linkedpic' },
        { type: 'gallery' },
    //   { type: 'embeddedvideo' },
        ],
}