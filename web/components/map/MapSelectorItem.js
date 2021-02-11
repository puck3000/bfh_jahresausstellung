import { MdFlag, MdDirectionsWalk } from 'react-icons/md'
import { IoMdPin } from 'react-icons/io'

export default function MapSelectorItem({ text, active }) {
  const icon = (text) => {
    switch (text) {
      case 'Themenpfade':
        return (
          <MdDirectionsWalk
            className={`inline-block h-10 lg:h-12 w-10 lg:w-12 p-2 lg:border-r-2 ${
              active ? 'border-white' : 'border-black'
            } `}
          />
        )
        break
      case 'Ateliers':
        return (
          <MdFlag
            className={`inline-block h-10 lg:h-12 w-10 lg:w-12 p-2 lg:border-r-2 ${
              active ? 'border-white' : 'border-black'
            } `}
          />
        )
        break
      case 'Projekte':
        return (
          <IoMdPin
            className={`inline-block h-10 lg:h-12 w-10 lg:w-12 p-2 lg:border-r-2 ${
              active ? 'border-white' : 'border-black'
            } `}
          />
        )
        break

      default:
        break
    }
  }

  return (
    <div
      className={`flex items-center lg:w-52 ${
        active
          ? 'bg-black text-white border-white border-2'
          : 'bg-white text-black border-black border-2'
      }`}
    >
      {icon(text)}
      <p className='hidden lg:visible inline-block   px-4 lg:text-small-dt'>
        {text}
      </p>
    </div>
  )
}
