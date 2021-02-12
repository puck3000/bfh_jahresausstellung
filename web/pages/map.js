import groq from 'groq'
import client from 'client'
import imageUrlBuilder from '@sanity/image-url'
import Head from 'next/head'
import Layout from 'components/Layout'
import Inhalt from 'components/Inhalt'
import Ateliers from 'components/Ateliers'
import PinchMap from 'components/map/PinchMap'
import Map from 'components/map/Map'
import BottomNav from 'components/BottomNav'
import MainNavigation from 'components/MainNavigation'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Karte = (props) => {
  const { title = 'Missing Title', inhalt } = props

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

      <div className=''>
        <div className='m-1 lg:m-4 min-h-screen grid grid-rows-bottomFooter '>
          <header className='fixed left-0 right-0 z-30 2xl:top-0 2xl:left-0 2xl:w-full'>
            <MainNavigation />
          </header>
          <main className='pt-four 2xl:pt-tooBig'>
            <PinchMap />
          </main>
        </div>
      </div>

      <style jsx global>{`
        body {
          background-color: black;
        }
      `}</style>
    </>
  )
}

const query = groq`
    *[_type == 'map'][0]{'inhalt': content, title}
`

Map.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query
  return await client.fetch(query, { slug })
}

export default Karte
