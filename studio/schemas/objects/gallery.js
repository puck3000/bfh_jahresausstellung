import linkedpic from "./linkedpic";

export default {
    title: 'Gallerie',
    name: 'gallery',
    type: 'object',
    fields: [
        {
            title: 'Bild',
            name: 'slide',
            type: 'array',
            of: [
                { type: 'linkedpic'}
            ],
            options: {
                layout: 'grid'
            }
        }
    ],
    
}