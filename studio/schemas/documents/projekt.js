import {RiFocusLine} from 'react-icons/ri'
import Tabs from "sanity-plugin-tabs"

export default {
    title: 'Projekte', 
    name: 'projekt',  
    type: 'document',  
    icon: RiFocusLine,
    preview: {
      select: {
        title: 'content.titel',
        media: 'content.referencepic'
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
              title: 'Verfasser*in',
              type: 'array',
              of:[ 
                {type: 'string'}
              ],
              fieldset: 'main'
            },
            {
              name: 'download',
              title: 'Download',
              type: 'file',
              options: { collapsible: true, collapsed: true,},
              fields: [
                {name: 'label', type: 'string', title: 'label'}
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
                  hotspot: true 
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