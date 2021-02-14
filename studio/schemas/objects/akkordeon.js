import { HiOutlineViewList } from 'react-icons/hi'
export default {
  name: 'akkordeon',
  title: 'Akkordeon',
  type: 'object',
  icon: HiOutlineViewList,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'akkContent',
      title: 'Akkordeon Inhalt',
      type: 'inhalt',
    },
  ],
}
