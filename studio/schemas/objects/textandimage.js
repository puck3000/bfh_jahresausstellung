import {BiBookContent} from 'react-icons/bi'
export default {
    name: 'textandimage',
    title: 'Lauftext mit Bild',
    type: 'object',
    icon: BiBookContent,
    fields: [
        {
            name: 'image',
            title: 'Bild',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
                { name: 'alt', title: 'Alt-Text', type: 'string'}
            ]
        },
        {
            name: 'text',
            title: 'Text',
            type: 'array', 
            of: [{type: 'block'}],
    
        },
    ],
    
}