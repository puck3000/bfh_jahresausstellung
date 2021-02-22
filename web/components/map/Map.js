import { getStandorteAndProjectsByStId } from 'lib/api'
import BaseMap from './BaseMap.js'
import { MapContext } from 'pages/map'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import { use100vh } from 'react-div-100vh'

export default function Map() {
  const [mapContext, setMapContext] = useContext(MapContext)

  const height = use100vh()

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 1 },
    show: { opacity: 1, scale: 2 },
    selected: { opacity: 1, scale: 4 },
  }

  const clickHandler = (id, themenpfad) => {
    getStandorteAndProjectsByStId(id)
      .then((res) =>
        setMapContext((mapContext) => ({
          ...mapContext,
          selectedStandort: res[0],
        }))
      )
      .then(
        setMapContext((mapContext) => ({
          ...mapContext,
          selectedThemenpfad: themenpfad,
        }))
      )
      .then(
        setMapContext((mapContext) => ({ ...mapContext, sideBarVisible: true }))
      )
  }

  return (
    <div
      className={`w-screen lg:h-screen ${mapContext.selectedThemenpfad}`}
      style={{ height: height }}
    >
      <svg
        version='1.2'
        viewBox='0 0 3507 2480'
        className='bg-black w-full h-full'
      >
        <BaseMap></BaseMap>
        {/* Standorte */}
        <motion.g variants={containerVariants} initial='hidden' animate='show'>
          {mapContext.filteredStandorte.map((standort) => (
            <motion.g
              variants={itemVariants}
              key={standort._id}
              transition={{ type: 'spring', duration: 0.8 }}
              animate={
                standort._id == mapContext.selectedStandort._id
                  ? { opacity: 1, scale: 4 }
                  : { opacity: 1, scale: 2 }
              }
            >
              <circle
                cx={standort.coordinates.xaxis}
                cy={standort.coordinates.yaxis}
                r='10'
                className={`cursor-pointer ${standort.themenpfad.title} `}
                key={standort._id}
                onClick={() => {
                  clickHandler(standort._id, standort.themenpfad.title)
                }}
              />
            </motion.g>
          ))}
        </motion.g>
      </svg>
      <style jsx>{`
        circle.Zentralität {
          stroke: #fac300;
          fill: #fac300;
        }
        circle.Ressourcen {
          stroke: #699673;
          fill: #699673;
        }
        circle.Wohnformen {
          stroke: #699bbe;
          fill: #699bbe;
        }
      `}</style>
    </div>
  )
}
