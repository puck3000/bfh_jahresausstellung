import {
  getAteliersInfosById,
  getProjectInfosById,
  getThemenpfadInfosById,
} from 'lib/api'
import BaseMap from './BaseMap.js'

export default function Map({
  dataPoints,
  onSidebarToggle,
  onMapPointSelected,
}) {
  const clickHandler = (bereich, refId) => {
    // things to do on click: 1. fetch relevant data 2. show sidebar with data
    switch (bereich) {
      case 'themenpfad':
        getThemenpfadInfosById(refId).then((res) => onMapPointSelected(res[0]))

        break
      case 'atelier':
        getAteliersInfosById(refId).then((res) => onMapPointSelected(res[0]))
        break
      case 'projekt':
        getProjectInfosById(refId).then((res) => onMapPointSelected(res[0]))
        break
      default:
        break
    }
    onSidebarToggle(true)
  }

  return (
    <div className={`w-full ${dataPoints.currentLayer}`}>
      <svg
        version='1.2'
        viewBox='0 0 3507 2480'
        className='bg-black w-full h-full'
      >
        <BaseMap></BaseMap>
        {/* Themenpfade */}
        <g>
          {dataPoints?.themenpfade.map((themenpfad) => (
            <rect
              x={themenpfad.x}
              y={themenpfad.y}
              height='300'
              width='300'
              className={`opacity-70 hover:opacity-90 ${themenpfad.color}`}
              key={themenpfad.id}
              onClick={() => {
                clickHandler('themenpfad', themenpfad.id)
              }}
            />
          ))}
        </g>
        {/* Ateliers */}
        <g>
          {dataPoints.ateliers.map((atelier) => (
            <circle
              cx={atelier.cx}
              cy={atelier.cy}
              r='50'
              className={`opacity-70 hover:opacity-90 ${atelier.themenpfad}`}
              key={atelier.id}
              onClick={() => {
                clickHandler('atelier', atelier.id)
              }}
            />
          ))}
        </g>
        {/* Projekte */}
        <g>
          {dataPoints.projects.map((project) => (
            <svg
              x={project.x}
              y={project.y}
              className={`opacity-70 hover:opacity-90 ${project.themenpfad} ${project.atelier}`}
              key={project.id}
            >
              <polygon
                points='0,100 50,0 100,100'
                onClick={() => {
                  clickHandler('project', project.id)
                }}
              />
            </svg>
          ))}
        </g>
      </svg>
      <style jsx>{`
        rect {
          stroke: #0000ff;
          fill: #0000ff;
          display: none;
        }
        circle {
          stroke: #006600;
          fill: #00cc00;
          display: none;
        }
        .triangle {
          margin: 0 auto;
          width: 100px;
          height: 100px;
        }
        polygon {
          stroke: #660000;
          fill: #cc3333;
          display: none;
        }
        .themenpfade rect {
          display: initial;
        }

        .ateliers circle {
          display: initial;
        }

        .projekte polygon {
          display: initial;
        }

        .at1 circle.t1,
        .at2 circle.t2,
        .at3 circle.t3 {
          display: initial;
        }

        .pa1 svg.a1 > polygon,
        .pa2 svg.a2 > polygon,
        .pa3 svg.a3 > polygon {
          display: initial;
        }
      `}</style>
    </div>
  )
}
