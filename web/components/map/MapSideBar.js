import { MdAdd, MdClose, MdArrowForward } from 'react-icons/md'
import ProjLightBox from 'components/ProjLightBox'
import { useContext } from 'react'
import { MapContext } from 'pages/index'
import Akkorderer, { AkkHeader, AkkContent } from 'components/Akkorderer'
import { AnimatePresence, motion } from 'framer-motion'
import { useMediaQuery } from 'lib/useMediaQuery'

export default function MapSideBar() {
  const [mapContext, setMapContext] = useContext(MapContext)
  let isDesktop = useMediaQuery('(min-width: 1024px)')

  const asideVariants = {
    initial: {
      opacity: 0,
      x: '100%',
      transition: {
        when: 'beforeChildren',
        bounce: 0.1,
      },
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.3,
        bounce: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        bounce: 0.1,
      },
    },
  }
  const mobildeAsideVariants = {
    initial: {
      opacity: 0,
      x: '100%',
      transition: {
        delayChildren: 0.3,
        bounce: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: '100%',
      transition: {
        delayChildren: 0.3,
        bounce: 0.1,
      },
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        bounce: 0.1,
      },
    },
  }
  const closeSvgVariants = {
    initial: { opacity: 0, rotate: -90 },
    enter: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: -90 },
  }
  const contentVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {mapContext.sideBarVisible && (
        <motion.aside
          key='sidebar'
          variants={isDesktop ? asideVariants : mobildeAsideVariants}
          initial='initial'
          animate='enter'
          exit='exit'
          className={`overflow-auto z-50 p-1 mt-0  lg:p-4 2xl:p-6 fixed bottom-0 right-0 left-0 lg:left-auto lg:h-full bg-${mapContext.selectedThemenpfad} lg:top-0 lg:shadow-left lg:w-1/4`}
        >
          <motion.svg
            key='sideBarToggle'
            variants={closeSvgVariants}
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='4 2 24 24'
            height='2em'
            width='2em'
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10 lg:h-12 lg:w-12 mb-4 cursor-pointer'
            onClick={() =>
              setMapContext((mapContext) => ({
                ...mapContext,
                sideBarVisible: false,
                selectedStandort: [],
              }))
            }
          >
            <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
          </motion.svg>
          <motion.div variants={contentVariants} key='sideBarContent'>
            <h2 className='mb-2'>Projekte am Standort</h2>
            <hr className='mb-2'></hr>
            {/* Projektliste */}
            {mapContext.selectedStandort.projekte?.map((projekt) => {
              return (
                <Akkorderer key={projekt._id}>
                  <AkkHeader>
                    <div className='mb-2'>
                      <MdAdd className='inline cursor-pointer mr-1 transform transition-transform' />
                      <h3 className='inline cursor-pointer text-small lg:text-small-dt'>
                        {projekt.content.titel}
                      </h3>
                    </div>
                  </AkkHeader>
                  <AkkContent>
                    <div className='projLightBox'>
                      <ProjLightBox projekt={projekt.content} />
                    </div>
                  </AkkContent>
                  <hr className='mb-2'></hr>
                </Akkorderer>
              )
            })}
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
