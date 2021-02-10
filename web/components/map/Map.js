// import Cat from '../svgs/cat.svg'
import BaseMap from './BaseMap.js'

export default function Map({ dataPoints }) {
  return (
    <div className='alleProjects w-full'>
      <svg
        version='1.2'
        viewBox='0 0 3507 2480'
        // height='209.973mm'
        // width='296.926mm'
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
              className={`opacity-70 hover:opacity-100 ${themenpfad.color}`}
              key={themenpfad.id}
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
              className={`opacity-70 hover:opacity-100 ${atelier.themenpfad}`}
              key={atelier.id}
            />
          ))}
        </g>
        {/* Projekte */}
        <g>
          {dataPoints.projects.map((project) => (
            <svg
              x={project.x}
              y={project.y}
              className={`opacity-70 hover:opacity-100 ${project.themenpfad} ${project.atelier}`}
              key={project.id}
            >
              <polygon points='0,100 50,0 100,100' />
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
        .alleThemenpfade rect {
          display: initial;
        }

        .alleAteliers circle {
          display: initial;
        }

        .alleProjects polygon {
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
