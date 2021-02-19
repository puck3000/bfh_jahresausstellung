import ActiveLink from './ActiveLink'
import { MdMap } from 'react-icons/md'
import Link from 'next/link'

export default function DesktopNav() {
  return (
    <nav className='deskNav relative m-4 grid grid-cols-4'>
      <ul className='col-span-3'>
        <li className='inline-block mr-4'>
          <ActiveLink activeClassName='active' href='/'>
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
      <Link href='../map'>
        <a className='flex mapIcon justify-end'>
          <MdMap size='1.5em' />
        </a>
      </Link>
    </nav>
  )
}
