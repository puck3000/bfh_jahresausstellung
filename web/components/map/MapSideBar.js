import Link from 'next/link'
import { MdAdd, MdClose, MdArrowForward } from 'react-icons/md'
import ProjLightBox from 'components/ProjLightBox'
import { useContext } from 'react'
import { MapContext } from 'pages/map'
import Akkorderer, { AkkHeader, AkkContent } from 'components/Akkorderer'

export default function MapSideBar() {
  const [mapContext, setMapContext] = useContext(MapContext)

  if (mapContext.sideBarVisible) {
    return (
      <aside
        className={`overflow-auto z-50 p-1 mt-0  lg:p-4 fixed bottom-0 right-0 left-0 lg:left-auto lg:h-full bg-${mapContext.selectedThemenpfad} lg:top-0 lg:shadow-left lg:w-1/4`}
      >
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='4 2 24 24'
          height='2em'
          width='2em'
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 lg:h-12 lg:w-12 mb-4 cursor-pointer'
          onClick={() =>
            setMapContext((mapContext) => ({
              ...mapContext,
              sideBarVisible: false,
            }))
          }
        >
          <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
        </svg>

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
