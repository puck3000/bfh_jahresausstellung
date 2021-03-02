import { motion } from 'framer-motion'
import Head from 'next/head'
import FooterComponent from './FooterComponent'
import MainNavigation from './MainNavigation'
import { NavContext } from 'lib/navContext'
import { useState } from 'react'

export default function Layout({ children }) {
  const [navContext, setNavContext] = useState(false)

  const pageTransVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { when: 'beforeChildren' } },
    exit: { opacity: 0 },
  }
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Neue Räume. Stadt und Land in Huttwil. BFH Jahresausstellung 2021'
        />
        <meta
          property='og:image'
          content={`/public/JahresausstellungArchitektur2021.png`}
        />
        <meta
          name='og:title'
          content='Neue Räume. Stadt und Land in Huttwil. BFH Jahresausstellung 2021'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <title>
          Neue Räume. Stadt und Land in Huttwil. BFH Jahresausstellung 2021
        </title>
      </Head>

      <motion.div
        className='m-1 lg:m-4 2xl:m-6 grid grid-rows-bottomFooter '
        id='baseWrapper'
        initial='initial'
        animate='enter'
        exit='exit'
        variants={pageTransVariants}
        transition={{ duration: 0.3, type: 'tween' }}
      >
        <NavContext.Provider value={[navContext, setNavContext]}>
          <header
            className='fixed left-0 right-0 pt-1 lg:pt-4  2xl:pt-0 top-0 z-30 2xl:w-full'
            onClick={() => {
              navContext && setNavContext(false)
            }}
          >
            <MainNavigation />
          </header>
        </NavContext.Provider>
        <main className='pt-four 2xl:pt-tooBig'>{children}</main>
        {/* <BackToTop /> */}
        <FooterComponent />
      </motion.div>
    </>
  )
}
