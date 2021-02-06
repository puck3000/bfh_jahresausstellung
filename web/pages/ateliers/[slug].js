import groq from 'groq'
import client from 'client'
import Head from 'next/head'
import Layout from 'components/Layout'
import imageUrlBuilder from '@sanity/image-url'
import Inhalt from 'components/Inhalt'
import Team from 'components/Team'
import Link from 'next/link'
import ProjekteIndex from 'components/ProjekteIndex'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Atelier = (props) => {
  const {
    titel = 'Missing Title',
    untertitel,
    team,
    vorgehen,
    standort,
    projekteIndex,
    referencepic,
  } = props.atelier

  return (
    <Layout>
      <Head>
        <title>Atelier | {titel}</title>
      </Head>
      <div className='intro'>
        <h2 className='anker mb-one'>Atelier</h2>
        <hr className='mb-one' />
        <div className='lg:grid lg:grid-cols-2 gap-1'>
          <div className=''>
            <h1 className='mb-one'>{titel}</h1>
            <p className='mb-one'>{untertitel}</p>
          </div>
          <figure className='mb-one'>
            <img
              src={urlFor(referencepic).width(2000).height(1600).url()}
              srcSet={`${urlFor(referencepic)
                .width(1024)
                .height(819)
                .format('webp')
                .url()} 1024w, ${urlFor(referencepic)
                .width(2000)
                .height(1600)
                .format('webp')
                .url()} 2000w,`}
              sizes='(max-width:1024px) 100vw, 50vw'
            />
          </figure>
        </div>
        {/* Team */}
        {team && <Team team={team} />}
        {/* Vorgehen */}
        {vorgehen && <Inhalt inhalt={vorgehen} />}
        {/* Standort */}
        {standort && <p className='mb-2'>{standort}</p>}
        {/* Projekte  */}
        {projekteIndex && <ProjekteIndex projekte={projekteIndex} />}
      </div>
    </Layout>
  )
}

const query = groq`
  *[_type == "atelier" && content.slug.current == $slug][0].content{
    titel,
    untertitel,
    referencepic,
    standort,
    team, 
    vorgehen,
    'projekteIndex': projekte[]->{_id,content{titel,'slug': slug.current, people, referencepic, gallery,'downloadURL': download.asset->url, 'downloadLABEL': download.label}}
    
  }
`

export async function getStaticProps({ params }) {
  const atelier = await client.fetch(query, {
    slug: params.slug,
  })

  return {
    props: {
      atelier,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "atelier" && defined(content.slug.current)][].content.slug.current`
  )
  return {
    paths: paths.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export default Atelier
