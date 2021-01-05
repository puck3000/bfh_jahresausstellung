export default {
    title: 'Bild',
    name: 'pic',
    type: 'object',
    fields: [
        {
            title: 'Bilddatei',
            name: 'pic',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            }
        },
        {
            title: 'Bildunterschrift',
            name: 'caption',
            type: 'content', 
        },
    ]
}