import { MdArrowForward } from 'react-icons/md'

export default function BottomNav() {
  return (
    <nav>
      <p className='mb-1 lg:mb-2'>Wohin geht die Reise?</p>
      <ul>
        <li className='mb-1 lg:mb-2'>
          <hr className='mb-1 lg:mb-2'></hr>
          <div className='flex flex-row items-center'>
            <MdArrowForward className='transform -rotate-90 mr-2' size='2rem' />
            <h3>top</h3>
          </div>
        </li>
        <li className='mb-1 lg:mb-2'>
          <hr className='mb-1 lg:mb-2'></hr>
          <div className='flex flex-row items-center'>
            <MdArrowForward className='transform mr-2' size='2rem' />
            <h3>top</h3>
          </div>
        </li>
      </ul>
    </nav>
  )
}
