import Link from 'next/link'
import client from 'client'
import imageUrlBuilder from '@sanity/image-url'
import {
  MdClose,
  MdArrowForward,
  MdFlag,
  MdDirectionsWalk,
} from 'react-icons/md'
import { IoMdPin } from 'react-icons/io'
import ProjLightBox from 'components/ProjLightBox'
import { useContext } from 'react'
import { MapContext } from 'pages/map'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export default function MapSideBar({ onSidebarToggle }) {
  const [mapContext, setMapContext] = useContext(MapContext)

  return (
    <aside className='p-1 mt-0 lg:p-4 lg:fixed bg-white lg:h-full lg:right-0 lg:top-0 lg:shadow-left lg:w-1/4 z-40'>
      {mapContext.selectedProject && (
        <div>
          <MdClose
            className='h-6 w-6 lg:h-12 lg:w-12 z-50'
            onClick={() => onSidebarToggle(false)}
          />
          <h2 className='text-small mb-4 lg:mb-0 lg:text-small-dt pt-1'>
            Projekte am Standort XY:
          </h2>
          <div className=''>
            <ProjLightBox projekt={mapContext.selectedProject.inhalt} />
            <p>folgen Sie dem Pfad zum nächsten Projekt</p>
          </div>
        </div>
      )}
    </aside>
  )
}
