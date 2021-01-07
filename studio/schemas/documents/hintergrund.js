import {BiLayer} from 'react-icons/bi'

export default {
    name: 'hintergrund',
    title: 'Hintergrund',
    type: 'document',
    icon: BiLayer,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              auto: true
            },
        }
    ],
}