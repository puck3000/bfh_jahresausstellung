import Link from 'next/link'
import { MdArrowForward } from 'react-icons/md'

export default function BottomNav({ links }) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <nav className='mt-two lg:mt-big lg:relative'>
      <p className='mb-1 lg:mb-2 lg:absolute lg:mt-3'>Wohin geht die Reise?</p>

      <ul>
        <li className='mb-1 lg:mb-2'>
          <hr className='mb-1 lg:mb-2'></hr>
          <button
            onClick={scrollTop}
            className='cursor-pointer flex flex-row items-center lg:w-full lg:grid lg:grid-cols-4'
          >
            <MdArrowForward
              className='transform -rotate-90 mr-2 lg:justify-self-end'
              size='1.5rem'
            />
            <h3 className='lg:col-start-2 lg:justify-self-start'>top</h3>
          </button>
        </li>

        {links?.length &&
          links.map((link, idx) => {
            return (
              <li key={idx} className='mb-1 lg:mb-2'>
                <hr className='mb-1 lg:mb-2'></hr>
                <Link href={link?.url}>
                  <div className='cursor-pointer flex flex-row items-center lg:w-full lg:grid lg:grid-cols-4'>
                    <MdArrowForward
                      className='transform mr-2 lg:justify-self-end'
                      size='1.5rem'
                    />
                    <h3 className='lg:col-start-2 lg:justify-self-start'>
                      {link?.title}
                    </h3>
                  </div>
                </Link>
              </li>
            )
          })}
      </ul>
      <hr className='mb-1 lg:mb-2'></hr>
    </nav>
  )
}
