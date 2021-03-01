import groq from 'groq'
import client from 'client'
import Head from 'next/head'
import PinchMap from 'components/map/PinchMap'
import MainNavigation from 'components/MainNavigation'
import { createContext, useState } from 'react'
import { motion } from 'framer-motion'

export const MapContext = createContext()

const Karte = (props) => {
  const { standorte } = props.kartenDaten

  const [mapContext, setMapContext] = useState({
    standorte: standorte,
    filteredStandorte: standorte,
    selectedStandort: [],
    selectedThemenpfad: '',
    sideBarVisible: false,
  })

  const pageTransVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        {/* Todo: pull SEO meta content from CMS */}
        <meta
          name='description'
          content='Neue Räume. Stadt und Land in Huttwil. BFH Jahresausstellung 2021'
        />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/BFH.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta
          name='og:title'
          content='Neue Räume. Stadt und Land in Huttwil. BFH Jahresausstellung 2021'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <title>Neue Räume | BFH</title>
      </Head>

      <MapContext.Provider value={[mapContext, setMapContext]}>
        <motion.div
          className=''
          initial='initial'
          animate='enter'
          exit='exit'
          variants={pageTransVariants}
          transition={{ duration: 0.5, type: 'tween' }}
        >
          <div className='grid grid-rows-bottomFooter '>
            <header className='fixed karte left-0 top-4 z-30 2xl:top-0 2xl:left-0 2xl:w-3/4'>
              <MainNavigation />
            </header>
            <main className='kartenansicht'>
              <PinchMap />
            </main>
          </div>
        </motion.div>
      </MapContext.Provider>

      <style jsx global>{`
        body {
          background-color: black;
        }
        .kartenansicht .furtherLinks {
          display: none;
        }
      `}</style>
    </>
  )
}

const query = groq`
      *[_type == 'map'][0]{
        'standorte': *[_type == 'standort'][]{_id, coordinates,'themenpfad': themenpfad->{_id, 'title': content.title}}
      }
`

export async function getStaticProps({ params }) {
  const kartenDaten = await client.fetch(query)
  return {
    props: {
      kartenDaten,
    },
    revalidate: 1,
  }
}

export default Karte
