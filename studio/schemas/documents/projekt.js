import Tabs from "sanity-plugin-tabs"

export default {
    title: 'Projekte',  // The human-readable label. Used in the studio.
    name: 'projekt',   // Required. The field name, and key in the data record.
    type: 'document',  // Required. The name of any valid schema type.
    // Input fields below, as many as you need.  preview: {
      preview: {
        select: {
          title: 'content.titel',
        }
      },
    
  
    fields: [
      {
        type: 'object',
          name: 'content',
          inputComponent: Tabs,

          fieldsets: [
              {
                  name: 'main',
                  title: 'Main',
                  options: {sortOrder: 10}
              },
              {
                  name: 'meta',
                  title: 'Meta',
                  options: {sortOrder: 20}
              },
          ],
          options: {
              laoyut: 'object'
          },
          fields: [ 
          // MAIN TAB
            {
              title: 'Titel',
              name: 'titel',
              type: 'string',
              fieldset: 'main'
            },
            {
              title: 'Gallerie',
              name: 'gallery',
              type: 'gallery',
              fieldset: 'main'
            },
            {
              name: 'people',
              title: 'Menschen',
              type: 'array',
              of:[ 
                {type: 'string'}
              ],
              fieldset: 'main'
            },
          // META TAB
            {
              title: 'Atelier',
              name: 'atelier',
              type: 'reference',
              to: [
                {type: 'atelier'}
              ],
              fieldset: 'meta'
            },
            {
              title: 'Referenzbild',
              name: 'referencepic',
              type: 'image',
              options: {
                  hotspot: true // <-- Defaults to false
              },
              description: 'Das Referenzbild wird auf Index Seiten zum Verlinken, in Gallerien und auf Social Media verwendet.',
              fieldset: 'meta'
            },
            {
              title: 'Slug',
              name: 'slug',
              type: 'slug',
              options: {
                source: 'content.titel',
                auto: true
              },
              fieldset: 'meta'
            }
          ]
      }
    ]
  }