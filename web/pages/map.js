import groq from 'groq'
import client from 'client'
import Head from 'next/head'
import PinchMap from 'components/map/PinchMap'
import MainNavigation from 'components/MainNavigation'
import { createContext, useState } from 'react'

export const MapContext = createContext()

const Karte = (props) => {
  const { standorte } = props.kartenDaten

  const [mapContext, setMapContext] = useState({
    standorte: standorte,
    selectedStandort: [],
    sideBarVisible: false,
  })

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
        <div className=''>
          <div className='min-h-screen grid grid-rows-bottomFooter '>
            <header className='fixed left-0 top-4 right-0 z-30 2xl:top-0 2xl:left-0 2xl:w-full'>
              <MainNavigation />
            </header>
            <main className=''>
              <PinchMap />
            </main>
          </div>
        </div>
      </MapContext.Provider>

      <style jsx global>{`
        body {
          background-color: black;
        }
      `}</style>
    </>
  )
}

const query = groq`
      *[_type == 'map'][0]{
        'standorte': *[_type == 'standort'][]{_id, coordinates,'themenpfad': themenpfad->{_id, 'title': content.title}}
      }
     //*[_type == 'standort'][]{_id, coordinates,'themenpfad': themenpfad->{_id, 'title': content.title}}

      
      // 'projekte': *[_type == 'projekt'][]{ 
      //   _id,
      // 	'title': content.titel, 'coordinates': content.coordinates,
    	// 	'einordnung': content.atelier->{'atelierId': _id, 'atelierName': content.titel, 'themenpfadId': content.themenpfad._ref, 'themenpfadName': content.themenpfad->content.title }
	   // 	}   
    //}
`

export async function getStaticProps({ params }) {
  const kartenDaten = await client.fetch(query)
  // const themenpfade = await client.fetch(getAllThemenpfade)
  return {
    props: {
      kartenDaten,
      // themenpfade
    },
    revalidate: 1,
  }
}

export default Karte
