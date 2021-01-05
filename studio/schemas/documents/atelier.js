import Tabs from "sanity-plugin-tabs"
export default {
    title: 'Atelier',
    name: 'atelier',
    type: 'document',
    fields: [
        {
            type: 'object',
            name: 'content',
            inputComponent: Tabs,

            fieldsets: [
                {
                    name: 'main',
                    title: 'Main',
                    options: {sortOrder: 10}
                },
                {
                    name: 'inhalt',
                    title: 'Inhalt',
                    options: {sortOrder: 20}
                },
                {
                    name: 'settings',
                    title: 'Einstelllungen',
                    options: {sortOrder: 30}
                }
            ],
            options: {
                laoyut: 'object'
            },
            fields: [
                {
                    title: 'Titel',
                    name: 'title',
                    type: 'string',
                    fieldset: 'main'
                },
                {
                    title: 'Kurzbeschrieb',
                    name: 'content',
                    type: 'content',
                    fieldset: 'main'
                },
                {
                    title: 'Titelbild',
                    name: 'titleimg',
                    type: 'image',
                    fieldset: 'main'
                },
                {
                    name: 'sectionBuilder',
                    title: 'Sektionen',
                    type: 'array',
                    of: [
                        { type: 'section' },
                        ],
                    fieldset: 'inhalt'
                },
                {
                    
                    title: 'Themenpfad',
                    name: 'themenpfad',
                    type: 'reference',
                    to: [
                        {type: 'themenpfad'}
                    ],
                    fieldset: 'settings'   
                }
            ]
        }
    ]
}   