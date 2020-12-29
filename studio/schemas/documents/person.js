export default {
    title: 'Person',
    name: 'person',
    type: 'document',
    fields: [
        {
            title: 'Vorname',
            name: 'firstname',
            type: 'string'
        },
        {
            title: 'Nachname',
            name: 'lastname',
            type: 'string'
        },
        {
            title: 'Email',
            name: 'email',
            type: 'email'
        },
        {
            title: 'Profilbild',
            name: 'profilepic',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
        },
        {
            title: 'Infos', 
            name: 'text',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            title: 'Projekt',
            name: 'projekt',
            type: 'reference',
            to: [
              {type: 'projekt'}
            ]  
        },
        {
            title: 'Rolle',
            name: 'role',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'role'}
                    ]
                }
            ]

        }

    ],
    preview: {
        select: {
            lastname: 'lastname',
            firstname: 'firstname'
        },
        prepare(selection) {
            const {firstname, lastname} = selection
            return {
              title: `${lastname} ${firstname}`           
            }
          }
    }

}
