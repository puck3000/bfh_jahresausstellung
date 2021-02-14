import { MdArrowForward, MdDirectionsWalk } from 'react-icons/md'

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
      return <MdFlag />
      break
    default:
      return <MdArrowForward className={classN} size={size} />
      break
  }
}
