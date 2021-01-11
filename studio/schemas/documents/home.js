import {AiOutlineHome} from 'react-icons/ai'
export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
    icon: AiOutlineHome,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        }
    ],
}