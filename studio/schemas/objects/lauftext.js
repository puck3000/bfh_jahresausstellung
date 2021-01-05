export default {
    name: 'lauftext',
    title: 'Text',
    type: 'object',
    fields: [
        {
            name: 'inhalt',
            title: 'Inhalt',
            type: 'content',
        },
        {
            name: 'laufweite',
            title: 'Laufweite',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [
                    {value: 'compact', title: 'Kompakt'},
                    {value: 'fullwidth', title: 'Grosszügig'}
                ],
                layout: 'radio'
            },

        },
    ],
}