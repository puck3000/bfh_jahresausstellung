import ActiveLink from './ActiveLink'
import { MdMap } from 'react-icons/md'
import Link from 'next/link'

export default function DesktopNav() {
  return (
    <nav className='deskNav relative m-4 2xl:m-6 2xl:mr-0  flex justify-between'>
      <ul className=''>
        <li className='inline-block mr-4'>
          <ActiveLink activeClassName='false' href='/'>
            <a className='inline-block anker first mb-1 lg:mb-2 z-10'>Home</a>
          </ActiveLink>
        </li>
        <li className='inline-block mr-4'>
          <ActiveLink activeClassName='active' href='/hintergrund/huttwil'>
            <a className='inline-block  anker first mb-1 lg:mb-2 z-10'>
              Huttwil
            </a>
          </ActiveLink>
        </li>
        <li className='inline-block mr-4'>
          <ActiveLink activeClassName='active' href='/hintergrund/dencity'>
            <a className='inline-block  anker first mb-1 lg:mb-2  z-10'>
              Dencity
            </a>
          </ActiveLink>
        </li>
        <li className='inline-block mr-4'>
          <ActiveLink activeClassName='active' href='/themenpfade'>
            <a className='inline-block  anker first mb-1 lg:mb-2  z-10'>
              Themenpfade
            </a>
          </ActiveLink>
        </li>
        <li className='inline-block mr-4'>
          <ActiveLink activeClassName='active' href='/projekte'>
            <a className='inline-block  anker first mb-1 lg:mb-2 z-10'>
              Projektübersicht
            </a>
          </ActiveLink>
        </li>
        <li className='inline-block mr-4'>
          <ActiveLink activeClassName='active' href='/veranstaltungen'>
            <a className='inline-block  anker first mb-1 lg:mb-2 z-10'>
              Veranstaltungen
            </a>
          </ActiveLink>
        </li>
      </ul>
      <Link href='/'>
        <a className='flex mapIcon justify-end' aria-label='open map view'>
          <MdMap size='1.5em' />
        </a>
      </Link>
    </nav>
  )
}
