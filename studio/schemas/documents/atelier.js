import {MdFilterCenterFocus} from 'react-icons/md'
import Tabs from "sanity-plugin-tabs"
export default {
    title: 'Ateliers',
    name: 'atelier',
    type: 'document',
    icon: MdFilterCenterFocus,
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
                    name: 'sectionBuilder',
                    title: 'Inhalte',
                    type: 'inhalt',
                    fieldset: 'main'
                },
                {
                    name: 'projects',
                    title: 'Projekt Index',
                    type: 'array',
                    of: [
                        {
                            type: 'reference',
                            to: [
                                {type: 'projekt'}
                            ]
                        }
                    ],
                    fieldset: 'main'
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
                    title: 'Kurzbeschrieb',
                    name: 'content',
                    type: 'content',
                    fieldset: 'meta'
                },
                {
                    title: 'Standort',
                    name: 'standort',
                    type: 'string',
                    fieldset: 'meta'
                },
                {
                    title: 'Themenpfad',
                    name: 'themenpfad',
                    type: 'reference',
                    to: [
                      {type: 'themenpfad'}
                    ],
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