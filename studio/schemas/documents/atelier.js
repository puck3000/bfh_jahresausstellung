import { GiMultipleTargets } from 'react-icons/gi'
import Tabs from 'sanity-plugin-tabs'
export default {
  title: 'Ateliers',
  name: 'atelier',
  type: 'document',
  icon: GiMultipleTargets,
  preview: {
    select: {
      title: 'content.titel',
      media: 'content.referencepic',
    },
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
          options: { sortOrder: 10 },
        },
        {
          name: 'meta',
          title: 'Meta',
          options: { sortOrder: 20 },
        },
      ],
      options: {
        laoyut: 'object',
      },
      fields: [
        // MAIN TAB
        {
          title: 'Titel',
          name: 'titel',
          type: 'string',
          fieldset: 'main',
        },
        {
          title: 'Untertitel',
          name: 'untertitel',
          type: 'string',
          fieldset: 'main',
        },
        {
          title: 'Team',
          name: 'team',
          type: 'array',
          of: [{ type: 'teammitglied' }],
          fieldset: 'main',
        },
        {
          title: 'Themen',
          name: 'themen',
          type: 'array',
          of: [{ type: 'string' }],
          fieldset: 'main',
        },
        {
          title: 'Standort/e',
          name: 'standorte',
          type: 'array',
          of: [{ type: 'string' }],
          fieldset: 'main',
        },
        {
          title: 'Vorgehen',
          name: 'vorgehen',
          type: 'inhalt',
          fieldset: 'main',
        },
        // {
        //   title: 'Projekt Gallerie',
        //   type: 'slideshow',
        //   name: 'slideshow',
        //   fieldset: 'main',
        // },
        {
          name: 'projekte',
          title: 'Projekt Index',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'projekt' }],
            },
          ],
          fieldset: 'main',
        },
        {
          title: 'Referenzbild',
          name: 'referencepic',
          type: 'image',
          options: {
            hotspot: true, // <-- Defaults to false
          },
          description:
            'Das Referenzbild wird auf Index Seiten zum Verlinken, in Gallerien und auf Social Media verwendet.',
          fieldset: 'meta',
        },
        {
          title: 'Standort',
          name: 'standort',
          type: 'string',
          fieldset: 'meta',
        },
        {
          title: 'Themenpfad',
          name: 'themenpfad',
          type: 'reference',
          to: [{ type: 'themenpfad' }],
          fieldset: 'meta',
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title',
            auto: true,
          },
          fieldset: 'meta',
        },
      ],
    },
  ],
}
