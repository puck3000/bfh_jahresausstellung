import { string } from "prop-types";
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
            type: 'string',
            options: {
                list: ['kleiner Abstand', 'grosser Abstand'],
                layout: 'radio'
            }
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