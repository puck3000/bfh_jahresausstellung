import ProjIndexView from './ProjIndexView'
import ProjLightBox from './ProjLightBox'

export default function ProjekteIndex({ projekte }) {
  return (
    <ul className='grid grid-cols-2 lg:grid-cols-4 gap-1'>
      {projekte.map((projekt) => (
        <li key={projekt._id}>
          {projekt.content.gallery ? (
            <ProjLightBox projekt={projekt.content} />
          ) : (
            <ProjIndexView projekt={projekt.content} />
          )}
        </li>
      ))}
    </ul>
  )
}
