export default {
    title: 'Themenpfad',
    name: 'themenpfad',
    type: 'document',
    fields: [
        {
            title: 'Titel',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Lead',
            name: 'lead',
            type: 'content'
          },
        {
            title: 'Inhalt',
            name: 'content',
            type: 'content'
          },
        // add a unique slug field for queries, permalinks etc
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                // auto generates a slug from the title field
                source: 'title',
                auto: true
            }
        }
    ]
}