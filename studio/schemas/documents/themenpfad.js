// import {GrMapLocation} from 'react-icons/gr'
import { GiPathDistance } from 'react-icons/gi'
import Tabs from 'sanity-plugin-tabs'

export default {
  title: 'Themenpfade',
  name: 'themenpfad',
  type: 'document',
  icon: GiPathDistance,
  preview: {
    select: {
      title: 'content.title',
      media: 'content.referencepic',
    },
  },
  orderings: [
    {
      title: 'Alphabetisch',
      name: 'alpha',
      by: [{ field: 'content.title', direction: 'asc' }],
    },
  ],
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
        {
          title: 'Titel',
          name: 'title',
          type: 'string',
          fieldset: 'main',
        },
        // {
        //     title: 'Lead',
        //     name: 'lead',
        //     type: 'content',
        //     fieldset: 'main'
        //   },
        {
          title: 'Inhalt',
          name: 'content',
          type: 'inhalt',
          fieldset: 'main',
        },
        {
          name: 'ateliers',
          title: 'Atelier Index',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'atelier' }],
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
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'content.title',
            auto: true,
          },
          fieldset: 'meta',
        },
        {
          title: 'nextThemenpfad',
          name: 'nextThemenpfad',
          type: 'reference',
          to: [{ type: 'themenpfad' }],
          fieldset: 'meta',
        },
      ],
    },
  ],
}
