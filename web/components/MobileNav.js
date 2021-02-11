import ActiveLink from './ActiveLink'
import { useState } from 'react'
import { MdMap } from 'react-icons/md'
import Link from 'next/link'

export default function MobileNav() {
  const [mainNavVisibility, setMainNavVisibility] = useState(false)
  const toggle = () => setMainNavVisibility(!mainNavVisibility)
  return (
    <>
      <div className='mx-1 lg:mx-4 flex justify-between '>
        <button
          className='anker first mb-two focus:outline-none'
          onClick={() => {
            toggle()
          }}
        >
          Menu
        </button>
        <Link href='../map'>
          <MdMap size='1.5em' />
        </Link>
      </div>
      <nav
        className='relative'
        style={{ display: mainNavVisibility ? 'initial' : 'none' }}
      >
        <ul>
          <li>
            <ActiveLink
              activeClassName='active'
              href='/'
              onClick={() => {
                toggle()
              }}
            >
              <a className='inline-block anker first mb-1 lg:mb-2 z-10'>Home</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              activeClassName='active'
              href='/hintergrund/huttwil'
              onClick={() => {
                toggle()
              }}
            >
              <a className='inline-block  anker first mb-1 lg:mb-2 z-10'>
                Partnergemeinde
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              activeClassName='active'
              href='/hintergrund/dencity'
              onClick={() => {
                toggle()
              }}
            >
              <a className='inline-block  anker first mb-1 lg:mb-2  z-10'>
                Dencity
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              activeClassName='active'
              href='/themenpfade'
              onClick={() => {
                toggle()
              }}
            >
              <a className='inline-block  anker first mb-1 lg:mb-2  z-10'>
                Themenpfade
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              activeClassName='active'
              href='/projekte'
              onClick={() => {
                toggle()
              }}
            >
              <a className='inline-block  anker first mb-1 lg:mb-2 z-10'>
                Projektübersicht
              </a>
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
