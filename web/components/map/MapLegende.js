import { MapContext } from 'pages/map'
import { useContext, useEffect, useState } from 'react'
import { FaRegCircle } from 'react-icons/fa'
import { MdDirectionsWalk } from 'react-icons/md'

export default function MapLegende() {
  const [mapContext, setMapContext] = useContext(MapContext)
  const [filter, setFilter] = useState('')

  const clickHandler = (themenpfad) => {
    if (filter == themenpfad) {
      setFilter('')
    } else {
      setFilter(themenpfad)
    }
    setMapContext((mapContext) => ({
      ...mapContext,
      sideBarVisible: false,
    }))
  }

  useEffect(() => {
    const copyOfAllStandorte = JSON.parse(JSON.stringify(mapContext.standorte))
    let filteredStandorte = []
    if (filter) {
      filteredStandorte = copyOfAllStandorte.filter((standort) =>
        standort.themenpfad.title.includes(filter)
      )
    } else filteredStandorte = copyOfAllStandorte

    setMapContext((mapContext) => ({
      ...mapContext,
      filteredStandorte: filteredStandorte,
    }))
  }, [filter])

  return (
    <ul
      id='legende'
      className={`text-white absolute bottom-0 left-0 right-0 ${filter}`}
    >
      <li className='flex pl-2 mb-2 py-2 border-t-2 border-b-2 border-white'>
        <MdDirectionsWalk className='lg:ml-5 mr-2 lg:mr-4' />
        Themenpfade
      </li>
      <li
        className={`cursor-pointer flex pl-2 mb-2 pb-2 zentralität`}
        onClick={() => {
          clickHandler('Zentralität')
        }}
      >
        <FaRegCircle className='lg:ml-5 mr-2 lg:mr-4' />
        Zentralität
      </li>
      <li
        className='cursor-pointer flex pl-2 mb-2 pb-2 wohnformen'
        onClick={() => {
          clickHandler('Wohnformen')
        }}
      >
        <FaRegCircle className='lg:ml-5 mr-2 lg:mr-4' />
        Wohnformen
      </li>
      <li
        className='cursor-pointer flex pl-2 mb-2 pb-2 ressourcen'
        onClick={() => {
          clickHandler('Ressourcen')
        }}
      >
        <FaRegCircle className='lg:ml-5 mr-2 lg:mr-4' />
        Ressourcen
      </li>
    </ul>
  )
}
