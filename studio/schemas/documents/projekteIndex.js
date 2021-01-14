export default {
    name: 'projekteIndex',
    title: 'Projekte Übersicht',
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
        {
            title: 'Projekt Liste',
            name: 'projlist',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'projekt'}
                    ]
                }
            ],
        }
    ],
}