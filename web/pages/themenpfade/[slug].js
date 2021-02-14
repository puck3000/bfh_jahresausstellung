import groq from 'groq'
import client from 'client'
// import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import Head from 'next/head'
import Layout from 'components/Layout'
import Inhalt from 'components/Inhalt'
import Ateliers from 'components/Ateliers'
import Link from 'next/link'
import BottomNav from 'components/BottomNav'
import { MdMap } from 'react-icons/md'
import Wegweiser from 'components/Wegweiser'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Themenpfad = (props) => {
  const {
    title = 'Missing Title',
    referencepic,
    inhalt,
    indexOfAteliers,
  } = props.themenpfad

  const nextlink = {
    icon: 'MdDirectionsWalk',
    iconClassNames: 'icon mr-2 lg:justify-self-end',
    url: './themenpfade/zentralitaet',
    label: 'Folgen Sie dem Pfad',
  }
  const destinationToggler = {
    icon: 'MdDirectionsWalk',
    iconClassNames: 'icon mr-2 lg:justify-self-end',
    label: 'Wählen Sie eine Destination',
  }

  const destinations = []
  indexOfAteliers.forEach((atelier) => {
    destinations.push({
      icon: 'MdArrowForward',
      url: `/ateliers/${atelier.slug}`,
      label: atelier.titel,
    })
  })

  const destinationsOld = [
    {
      icon: 'MdArrowForward',
      url: './themenpfade/zentralitaet',
      label: 'Themenpfad Zenralität',
    },
    {
      icon: 'MdArrowForward',
      url: './themenpfade/ressourcen',
      label: 'Themenpfad Ressourcen',
    },
    {
      icon: 'MdArrowForward',
      url: './themenpfade/wohnformen',
      label: 'Themenpfad Wohnformen',
    },
  ]

  return (
    <Layout>
      <Head>
        <title>Themenpfad | {title}</title>
      </Head>
      <div>
        <h2 className='anker first mb-1 lg:mb-2'>Themenpfad</h2>
        <hr className='mb-1 lg:mb-2' />

        {/* INHALT */}
        {inhalt && <Inhalt inhalt={inhalt} />}

        {/* WEGWEISER */}
        <Wegweiser
          nextlink={nextlink}
          destinationToggler={destinationToggler}
          destinations={destinations}
        />
      </div>
    </Layout>
  )
}

const query = groq`
  *[_type == "themenpfad"&& content.slug.current == $slug][0].content{
    title,
    referencepic,
    'inhalt': content,
    'indexOfAteliers': ateliers[]->content{_id, 'slug': slug.current, titel, untertitel, referencepic}
  }
`

export async function getStaticProps({ params }) {
  const themenpfad = await client.fetch(query, {
    slug: params.slug,
  })

  return {
    props: {
      themenpfad,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "themenpfad" && defined(content.slug.current)][].content.slug.current`
  )
  return {
    paths: paths.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export default Themenpfad
