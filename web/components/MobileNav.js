import ActiveLink from './ActiveLink'
import { useState } from 'react'

export default function MobileNav() {
  const [mainNavVisibility, setMainNavVisibility] = useState(false)
  const toggle = () => setMainNavVisibility(!mainNavVisibility)
  return (
    <>
      <button
        className='anker first mb-two focus:outline-none'
        onClick={() => {
          toggle()
        }}
      >
        Menu
      </button>
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
