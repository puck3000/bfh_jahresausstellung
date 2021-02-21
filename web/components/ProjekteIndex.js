import { MdMap } from 'react-icons/md'
import ProjIndexView from './ProjIndexView'
import ProjLightBox from './ProjLightBox'

export default function ProjekteIndex({ projekte }) {
  return (
    <>
      <div className='flex flex-row justify-between mt-two lg:mt-big lg:grid lg:grid-cols-4'>
        <div>
          <h2 className='anker first mb-1 lg:mb-2 lg:inline-block'>Projekte</h2>
        </div>
      </div>
      <ul className='grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-2'>
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
    </>
  )
}
