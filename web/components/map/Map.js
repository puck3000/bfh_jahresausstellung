import {
  getAteliersInfosById,
  getProjectInfosById,
  getThemenpfadInfosById,
} from 'lib/api'
import BaseMap from './BaseMap.js'
import { MapContext } from 'pages/map'
import { useContext } from 'react'
import { motion } from 'framer-motion'

export default function Map({
  dataPoints,
  onSidebarToggle,
  onMapPointSelected,
}) {
  const [mapContext, setMapContext] = useContext(MapContext)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  const clickHandler = (pid) => {
    // things to do on click: 1. fetch relevant data 2. show sidebar with data
    getProjectInfosById(pid)
      .then((res) => setMapContext({ ...mapContext, selectedProject: res[0] }))
      .then(onSidebarToggle(true))
  }

  return (
    <div className={`${dataPoints.currentLayer} h-screen w-screen `}>
      <svg
        version='1.2'
        viewBox='0 0 3507 2480'
        className='bg-black w-full h-full'
      >
        <BaseMap></BaseMap>
        {/* Projekte */}
        <motion.g variants={containerVariants} initial='hidden' animate='show'>
          {mapContext.projekte.map((project) => (
            <motion.g variants={itemVariants}>
              <circle
                cx={project.coordinates.xaxis}
                cy={project.coordinates.yaxis}
                r='20'
                className={`opacity-70 hover:opacity-90 ${project.einordnung.themenpfadName} ${project.title}`}
                key={project._id}
                onClick={() => {
                  clickHandler(project._id)
                }}
              />
            </motion.g>
          ))}
        </motion.g>
      </svg>
      <style jsx>{`
        #karte {
          max-height: 70vh;
        }
        rect {
          stroke: #0000ff;
          fill: #0000ff;
        }
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
        .triangle {
          margin: 0 auto;
          width: 100px;
          height: 100px;
        }
        polygon {
          stroke: #660000;
          fill: #cc3333;
        }
      `}</style>
    </div>
  )
}
