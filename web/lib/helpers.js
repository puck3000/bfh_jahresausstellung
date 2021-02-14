import { MdArrowForward, MdDirectionsWalk, MdFlag, MdAdd } from 'react-icons/md'

export const iconServer = (icon, classNames, iconSize) => {
  const classN = classNames || ''
  const size = iconSize || ''

  switch (icon) {
    case 'MdArrowForward':
      return <MdArrowForward className={classN} size={size} />
      break
    case 'MdDirectionsWalk':
      return <MdDirectionsWalk className={classN} size={size} />
      break
    case 'MdFlag':
      return <MdFlag className={classN} size={size} />
      break
    case 'MdAdd':
      return <MdAdd className={classN} size={size} />
      break
    default:
      return <MdAdd className={classN} size={size} />
      break
  }
}
