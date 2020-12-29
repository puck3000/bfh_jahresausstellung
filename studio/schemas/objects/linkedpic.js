export default {
    title: 'Bild',
    name: 'linkedpic',
    type: 'object',
    fieldsets: [
        {name: 'link', title: 'Link'}
    ],
    fields: [
        {
            title: 'Bilddatei',
            name: 'pic',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            }
        },
        {
            title: 'Bildunterschrift',
            name: 'caption',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name: 'link',
            type: 'object',
            title: 'Externer Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              },
              {
                title: 'In neuem Tab öffnen',
                name: 'blank',
                type: 'boolean'
              }
            ],
            fieldset: 'link'
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Interner Link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'projekt' },
                  // other types you may want to link to
                ]
              }
            ],
            fieldset: 'link'
          }

    ]
}