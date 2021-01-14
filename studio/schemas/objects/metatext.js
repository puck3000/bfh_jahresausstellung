import {CgNametag} from 'react-icons/cg'

export default {
    name: 'metatext',
    title: 'metatext',
    type: 'document',
    icon: CgNametag,
    fields: [
        {
            name: 'inhalt',
            title: 'Meta Text',
            type: 'array', 
            of: [{
                type: 'block',
                styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Titel', value: 'h1' },
                    { title: 'Untertitel', value: 'h2' },
                    { title: 'Lead', value: 'blockquote' },  
                ]
            }],
        },
    ],
}