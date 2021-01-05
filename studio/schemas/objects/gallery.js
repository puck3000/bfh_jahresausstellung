import linkedpic from "./linkedpic";

export default {
    title: 'Gallerie',
    name: 'gallery',
    type: 'object',
    description: 'Hier können Bilder für die Gallerie bestimmt werden.',
    fields: [
        {
            title: 'Bild',
            name: 'slide',
            type: 'array',
            of: [
                { type: 'pic'}
            ],
            options: {
                layout: 'grid'
            }
        }
    ],
    
}