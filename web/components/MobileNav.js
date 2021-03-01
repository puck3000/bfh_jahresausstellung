import ActiveLink from './ActiveLink'
import { useContext, useState } from 'react'
import { MdMap } from 'react-icons/md'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { NavContext } from 'lib/navContext'

export default function MobileNav() {
  const [mainNavVisibility, setMainNavVisibility] = useState(false)
  const [navContext, setNavContext] = useContext(NavContext)

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const listItem = {
    hidden: { opacity: 0, x: '-20px' },
    show: { opacity: 1, x: '0' },
  }

  const toggle = () => setNavContext(!navContext)

  return (
    <>
      <div className='mx-1 lg:mx-4 flex justify-between '>
        <button
          className='anker first mb-two focus:outline-none'
          onClick={() => {
            toggle()
            console.log('context', navContext)
          }}
        >
          Menu
        </button>
        <Link href='/'>
          <a className='mapIcon'>
            <MdMap size='1.5em' />
          </a>
        </Link>
      </div>
      <nav
        className='relative'
        style={{ display: navContext ? 'initial' : 'none' }}
      >
        {navContext && (
          <motion.ul
            variants={container}
            initial='hidden'
            animate='show'
            className='mx-1 lg:mx-4'
          >
            <motion.li transition={{ type: 'tween' }} variants={listItem}>
              <ActiveLink
                activeClassName='false'
                href='/'
                onClick={() => {
                  toggle()
                }}
              >
                <a className='inline-block anker first mb-1 lg:mb-2 z-10'>
                  Home
                </a>
              </ActiveLink>
            </motion.li>
            <motion.li transition={{ type: 'tween' }} variants={listItem}>
              <ActiveLink
                activeClassName='active'
                href='/huttwil'
                onClick={() => {
                  toggle()
                }}
              >
                <a className='inline-block  anker first mb-1 lg:mb-2 z-10'>
                  Huttwil
                </a>
              </ActiveLink>
            </motion.li>
            <motion.li transition={{ type: 'tween' }} variants={listItem}>
              <ActiveLink
                activeClassName='active'
                href='/dencity'
                onClick={() => {
                  toggle()
                }}
              >
                <a className='inline-block  anker first mb-1 lg:mb-2  z-10'>
                  Dencity
                </a>
              </ActiveLink>
            </motion.li>
            <motion.li transition={{ type: 'tween' }} variants={listItem}>
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
            </motion.li>
            <motion.li transition={{ type: 'tween' }} variants={listItem}>
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
            </motion.li>
            <motion.li transition={{ type: 'tween' }} variants={listItem}>
              <ActiveLink
                activeClassName='active'
                href='/veranstaltungen'
                onClick={() => {
                  toggle()
                }}
              >
                <a className='inline-block  anker first mb-1 lg:mb-2 z-10'>
                  Veranstaltungen
                </a>
              </ActiveLink>
            </motion.li>
          </motion.ul>
        )}
      </nav>
      <style jsx global>{`
        header {
          transition: backdrop-filter 0.3s; -webkit-backdrop-filter 0.3s;
          ${
            navContext
              ? 'height: 100vh;  backdrop-filter: blur(4px) opacity(1); -webkit-backdrop-filter: blur(4px) opacity(1);'
              : 'backdrop-filter: blur(4px) opacity(0); -webkit-backdrop-filter: blur(4px) opacity(0)'
          }
        }
      `}</style>
    </>
  )
}
