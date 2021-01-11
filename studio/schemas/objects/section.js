export default {
    name: 'section',
    title: 'Sektion',
    type: 'object',
    fields: [
        {
            name: 'anchor',
            title: 'Anker',
            type: 'string',
            description: 'optionaler Anker für die Sektion, der automatisch in die Seitennavigation übernommen wird.'
        },
        {
            name: 'metatitle',
            title: 'Meta Titel',
            type: 'content',
            description: 'optionaler Rubriktitel, zB: "Intro", oder "Bildgallerie"'
        },
        {
            name: 'sectionBuilder',
            type: 'array',
            title: 'Section Content',
            description: 'Hier können die Inhalte der Sektion erstellt werden.',
            of: [{type: 'block',styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Titel', value: 'h1' },
                { title: 'Untertitel', value: 'h2' },
                { title: 'Lead', value: 'blockquote' },
                
            ]}]
            // of: [
            //   { type: 'lauftext' },
            //   { type: 'textandimage' },
            //   { type: 'linkedpic' },
            //   { type: 'gallery' },
            //   { type: 'embeddedvideo' },
            //  ]
          }
    ],
}