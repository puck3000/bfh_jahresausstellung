export default {
    title: 'Projekt',  // The human-readable label. Used in the studio.
    name: 'projekt',   // Required. The field name, and key in the data record.
    type: 'document',  // Required. The name of any valid schema type.
    // Input fields below, as many as you need.
    fields: [ 
      {
        title: 'Titel',
        name: 'title',
        type: 'string',
      },
      {
        title: 'Referenzbild',
        name: 'referencepic',
        type: 'image',
        options: {
            hotspot: true // <-- Defaults to false
        },
        description: 'Das Referenzbild wird auf Index Seiten zum Verlinken, in Gallerien und auf Social Media verwendet.'
      },
      {
        title: 'Infos', 
        name: 'text',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        title: 'Gallerie',
        name: 'gallery',
        type: 'gallery'
      },

      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
        }
      },
      {
          title: 'Atelier',
          name: 'atelier',
          type: 'reference',
          to: [
            {type: 'atelier'}
          ]
              
          
      }
    ]
  }