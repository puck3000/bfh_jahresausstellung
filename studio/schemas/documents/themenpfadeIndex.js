export default {
    name: 'themenpfadeIndex',
    title: 'themenpfadeIndex',
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
            title: 'Themenpfade Liste',
            name: 'tpflist',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'themenpfad'}
                    ]
                }
            ],
        }
    ],
}