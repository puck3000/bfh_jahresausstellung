import Link from 'next/link'
import client from 'client'
import imageUrlBuilder from '@sanity/image-url'
import {
  MdAdd,
  MdClose,
  MdArrowForward,
  MdFlag,
  MdDirectionsWalk,
} from 'react-icons/md'
import { IoMdPin } from 'react-icons/io'
import ProjLightBox from 'components/ProjLightBox'
import { useContext } from 'react'
import { MapContext } from 'pages/map'
import Akkorderer, { AkkHeader, AkkContent } from 'components/Akkorderer'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export default function MapSideBar({ onSidebarToggle }) {
  const [mapContext, setMapContext] = useContext(MapContext)

  if (mapContext.sideBarVisible) {
    return (
      <aside
        className={`overflow-auto z-50 p-1 mt-0  lg:p-4 fixed bottom-0 right-0 left-0 lg:left-auto lg:h-full bg-${mapContext.selectedThemenpfad} lg:top-0 lg:shadow-left lg:w-1/4`}
      >
        <MdClose
          className='h-6 w-6 lg:h-12 lg:w-12 mb-4 cursor-pointer'
          onClick={() =>
            setMapContext((mapContext) => ({
              ...mapContext,
              sideBarVisible: false,
            }))
          }
        />
        <h2 className='mb-2'>Projekte am Standort</h2>
        <hr className='mb-2'></hr>
        {/* Projektliste */}
        {mapContext.selectedStandort.projekte?.map((projekt) => {
          return (
            <Akkorderer key={projekt._id}>
              <AkkHeader>
                <div className='grid grid-cols-12 items-center mb-2'>
                  <MdAdd className='cursor-pointer mr-2 transform transition-transform' />
                  <h3 className='col-span-11 lg:ml-2 cursor-pointer text-small lg:text-small-dt'>
                    {projekt.content.titel}
                  </h3>
                </div>
              </AkkHeader>
              <AkkContent>
                <div className='projLightBox'>
                  <ProjLightBox projekt={projekt.content} />
                </div>
                {/* <Link href={}>
                <a className='flex items-center justify-between mb-4'>
                  <h2>Zum Projekt</h2>
                  <MdArrowForward className='h-8 w-8 lg:h-10 lg:w-10' />
                </a>
                </Link> */}
              </AkkContent>
              <hr className='mb-2'></hr>
            </Akkorderer>
          )
        })}
      </aside>
    )
  } else return <></>
}
