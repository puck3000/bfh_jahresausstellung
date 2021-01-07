import {AiOutlineLine} from "react-icons/ai"
export default {
    name: 'horzline',
    title: 'Horizontale Linie',
    type: 'object',
    icon: AiOutlineLine,
    fields: [
        {
            name: 'marginBottom',
            title: 'Vertikaler Abstand',
            type: 'boolean'
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare() {
            return {
                title: 'Horizonale Linie',    
            };
        },
    },
}