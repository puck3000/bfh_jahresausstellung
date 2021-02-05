import groq from 'groq'
import client from 'client'
import Head from 'next/head'
import Layout from 'components/Layout'
import imageUrlBuilder from '@sanity/image-url'
import Inhalt from 'components/Inhalt'
import Team from 'components/Team'
import Link from 'next/link'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Atelier = (props) => {
  const {
    titel = 'Missing Title',
    team,
    vorgehen,
    standort,
    slideshow,
    referencepic,
  } = props.atelier

  return (
    <Layout>
      <Head>
        <title>Atelier | {titel}</title>
      </Head>
      <div>
        <h2 className='my-2'>{titel}</h2>
        {/* Team */}
        {team && <Team team={team} />}
        {/* Vorgehen */}
        {vorgehen && <Inhalt inhalt={vorgehen} />}
        {/* Standort */}
        {standort && <p className='mb-2'>{standort}</p>}
        {/* Projekte Slideshow */}
        {slideshow?.slide.length > 0 ? (
          <Slideshow slides={slideshow}></Slideshow>
        ) : (
          <figure className='mb-2'>
            <img
              src={urlFor(referencepic)
                .width(2000)
                .height(1600)
                .format('webp')
                .url()}
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
        )}
        <Link href='/projekte'>
          <a> zu den Projekten</a>
        </Link>
      </div>
    </Layout>
  )
}

const query = groq`
  *[_type == "atelier" && content.slug.current == $slug][0].content{
    titel,
    referencepic,
    standort,
    team, 
    vorgehen,
    slideshow
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
