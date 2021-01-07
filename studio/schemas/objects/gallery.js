import {BiImages} from 'react-icons/bi'

export default {
    title: 'Gallerie',
    name: 'gallery',
    description: 'Hier können Bilder für die Gallerie bestimmt werden.',
    icon: BiImages,
    type: 'object',
    fields: [
        { name: 'slide', title: 'Slides', type: 'images'}
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: `Gallerie`,
                
            };
        },
    },

}