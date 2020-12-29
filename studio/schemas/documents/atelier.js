export default {
    title: 'Atelier',
    name: 'atelier',
    type: 'document',
    fields: [
        {
            title: 'Titel',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Kurzbeschrieb',
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
        },
        {
            title: 'Themenpfad',
            name: 'themenpfad',
            type: 'reference',
            to: [
              {type: 'themenpfad'}
            ]  
        }

    ]
}