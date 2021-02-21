import { motion } from 'framer-motion'
import { iconServer } from 'lib/helpers'
import Link from 'next/link'
import Akkorderer, { AkkHeader, AkkContent } from './Akkorderer'

export default function Wegweiser({
  nextlink,
  destinationToggler,
  destinations,
}) {
  return (
    <>
      <nav className='mt-two lg:mt-big lg:relative'>
        <p className='mb-1 lg:mb-2 lg:absolute lg:mt-3 '>
          Wohin geht die Reise?
        </p>

        <ul>
          {/* DESTINATIONS */}
          <li className='mb-1 lg:mb-2'>
            <hr className='mb-1 lg:mb-2'></hr>
            <p className=' focus:outline-none w-full flex mb-1 lg:mb-2 lg:items-center lg:grid lg:grid-cols-4'>
              {iconServer(
                destinationToggler.icon,
                destinationToggler.iconClassNames
              )}
              <h3 className='text-left lg:col-start-2 lg:col-span-2 lg:justify-self-start'>
                {destinationToggler.label}
              </h3>
            </p>
            <motion.ul className='destlist'>
              {destinations.map((destination, idx) => {
                return (
                  <Link key={idx} href={destination.url}>
                    <li className='cursor-pointer flex flex-row mb-1 lg:mb-2'>
                      <div className='icon  mr-2 '>
                        {iconServer(destination.icon)}
                      </div>
                      <h3 className=''>{destination.label}</h3>
                    </li>
                  </Link>
                )
              })}
            </motion.ul>
          </li>
          {/* Map Hinweis */}
          <li className='mb-1 lg:mb-2'>
            <hr className='mb-1 lg:mb-2'></hr>
            <Link href='/map'>
              <button className='cursor-pointer focus:outline-none w-full flex items-center lg:grid lg:grid-cols-4 mb-1 lg:mb-2'>
                {iconServer('MdMap', nextlink.iconClassNames)}
                <h3 className='text-left lg:col-start-2 lg:col-span-2 lg:justify-self-start'>
                  Finden Sie ein Projekt auf der Karte
                </h3>
              </button>
            </Link>
          </li>
          {/* NEXTLINK */}
          <li className='mb-1 lg:mb-2'>
            <hr className='mb-1 lg:mb-2'></hr>
            <Link href={nextlink.url}>
              <button className='cursor-pointer focus:outline-none w-full flex items-center lg:grid lg:grid-cols-4 mb-1 lg:mb-2'>
                {iconServer(nextlink.icon, nextlink.iconClassNames)}
                <h3 className='text-left lg:col-start-2 lg:col-span-2 lg:justify-self-start'>
                  {nextlink.label}
                </h3>
              </button>
            </Link>
            <hr className='mb-1 lg:mb-2'></hr>
          </li>
        </ul>
      </nav>
    </>
  )
}
