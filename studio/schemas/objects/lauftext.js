import {AiOutlineFileText} from 'react-icons/ai'
export default {
    name: 'lauftext',
    title: 'Lauftext',
    type: 'object',
    icon: AiOutlineFileText,
    fields: [
        {
            name: 'inhalt',
            title: 'Inhalt',
            type: 'array', 
            of: [{type: 'block'}],
        },
        {
            name: 'laufweite',
            title: 'Kompakt',
            type: 'boolean',
            decription: 'hier kann die kompakte Darstellung des Textblocks aktiviert werden.'
        },
    ],
}