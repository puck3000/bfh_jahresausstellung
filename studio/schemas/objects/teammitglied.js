export default {
    name: 'teammitglied',
    title: 'teammitglied',
    type: 'object',
    fields: [
        {
            name: 'person',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'avatar',
            title: 'Profilbild',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            }
        }
    ],
}