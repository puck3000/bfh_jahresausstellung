import { MapContext } from 'pages/map'
import { useContext, useEffect, useState } from 'react'
import { FaRegCircle } from 'react-icons/fa'
import { MdDirectionsWalk } from 'react-icons/md'

export default function MapLegende() {
  const [mapContext, setMapContext] = useContext(MapContext)
  const [filter, setFilter] = useState('')

  const filterByThemenpfad = (themenpfad) => {
    return mapContext.standorte
  }

  const clickHandler = (themenpfad) => {
    console.log('filtered by themenpfad:', themenpfad)
    setFilter(themenpfad)
  }

  useEffect(() => {
    const filteredStandorte = mapContext.standorte.filter((standort) =>
      standort.themenpfad.title.includes(filter)
    )
    setMapContext((mapContext) => ({
      ...mapContext,
      standorte: filteredStandorte,
    }))
  }, [filter])

  return (
    <ul className='text-white absolute bottom-0 left-0 right-0'>
      <li className='flex pl-2 mb-2 py-2 border-t border-b border-white'>
        <MdDirectionsWalk className='mr-2' />
        Themenpfade
      </li>
      <li
        className={`cursor-pointer flex pl-2 mb-2 pb-2`}
        onClick={() => {
          clickHandler('Zentralität')
        }}
      >
        <FaRegCircle className='mr-2' />
        Zentralität
      </li>
      <li
        className='cursor-pointer  flex pl-2 mb-2 pb-2'
        onClick={() => {
          clickHandler('Wohnformen')
        }}
      >
        <FaRegCircle className='mr-2' />
        Wohnformen
      </li>
      <li
        className='cursor-pointer  flex pl-2 mb-2 pb-2'
        onClick={() => {
          clickHandler('Ressourcen')
        }}
      >
        <FaRegCircle className='mr-2' />
        Ressourcen
      </li>
    </ul>
  )
}
