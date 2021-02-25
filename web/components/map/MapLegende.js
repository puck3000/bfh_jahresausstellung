import Link from 'next/link'
import { MapContext } from 'pages/index'
import { useContext, useEffect, useState } from 'react'
import { FaRegCircle } from 'react-icons/fa'
import { MdDirectionsWalk, MdArrowForward } from 'react-icons/md'

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

  const legendenText = (filter) => {
    switch (filter) {
      case 'Ressourcen':
        return (
          <p className='text-Ressourcen'>
            Projekte, welche sich mit den vorhandenen Ressourcen
            auseinandersetzten oder an bestehende Infrastrukturen anschliessen.{' '}
            <Link href='/themenpfade/ressourcen'>
              <a className='block text-right text-small-dt'>
                <MdDirectionsWalk size='1.5rem' className='inline' />
                Zum Themenpfad
              </a>
            </Link>
          </p>
        )
        break
      case 'Zentralität':
        return (
          <p className='text-Zentralität'>
            Projekte, welche den Dorfkern von Huttwil aktivieren und das
            Entwicklungspotential aufzuzeigen.
            <Link href='/themenpfade/zentralitaet'>
              <a className='block text-right text-small-dt'>
                <MdDirectionsWalk size='1.5rem' className='inline' />
                Zum Themenpfad
              </a>
            </Link>
          </p>
        )
        break
      case 'Wohnformen':
        return (
          <p className='text-Wohnformen'>
            Projekte, welche nach zukunftsträchtigen und anpassungsfähigen Wohn-
            und Gebäudeformen suchen.
            <Link href='/themenpfade/wohnformen'>
              <a className='block text-right text-small-dt'>
                <MdDirectionsWalk size='1.5rem' className='inline' />
                Zum Themenpfad
              </a>
            </Link>
          </p>
        )
        break

      default:
        return (
          <p>
            In unserer Ausstellung zeigen wir eine Auswahl studentischer
            Arbeiten, gegliedert in drei Themenpfade.
            <Link href='/themenpfade'>
              <a className='block text-right text-small-dt'>
                <MdDirectionsWalk size='1.5rem' className='inline' />
                Zu den Themenpfaden
              </a>
            </Link>
          </p>
        )
        break
    }
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
      selectedStandort: '',
    }))
  }, [filter])

  return (
    <ul
      id='legende'
      className={`text-white absolute bottom-0 left-0 right-0 lg:left-4 lg:right-4 2xl:left-6 2xl:right-6 ${filter}`}
    >
      <li className='flex pl-2 mb-2 py-2 border-t-2 border-b-2 border-white'>
        <MdDirectionsWalk className='mr-2 lg:mr-4' />
        Themenpfade
      </li>
      <li className='lg:grid lg:grid-cols-4'>
        <ul>
          <li
            className={`cursor-pointer flex pl-2 pb-2 zentralität`}
            onClick={() => {
              clickHandler('Zentralität')
            }}
          >
            <FaRegCircle className='mr-2 lg:mr-4' />
            Zentralität
          </li>
          <li
            className='cursor-pointer flex pl-2 pb-2 wohnformen'
            onClick={() => {
              clickHandler('Wohnformen')
            }}
          >
            <FaRegCircle className='mr-2 lg:mr-4' />
            Wohnformen
          </li>
          <li
            className='cursor-pointer flex pl-2 pb-2 ressourcen'
            onClick={() => {
              clickHandler('Ressourcen')
            }}
          >
            <FaRegCircle className='mr-2 lg:mr-4' />
            Ressourcen
          </li>
        </ul>
        <article className='lg:col-span-3'>{legendenText(filter)}</article>
      </li>
    </ul>
  )
}
