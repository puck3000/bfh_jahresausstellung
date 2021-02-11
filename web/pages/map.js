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

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Karte = (props) => {
  const { title = 'Missing Title', inhalt } = props

  return (
    <Layout>
      <Head>
        <title>{title} | BFH</title>
      </Head>
      <div>
        <h2 className='mb-2 text-white'>{title}</h2>
        <PinchMap />
        {/* INHALT */}
        {/* { inhalt && <Inhalt inhalt={inhalt}/> } */}
      </div>
      <style jsx global>{`
        body {
          background-color: black;
        }
      `}</style>
    </Layout>
  )
}

const query = groq`
    *[_type == 'map'][0]{'inhalt': content, title}
`

Karte.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query
  return await client.fetch(query, { slug })
}

export default Karte
