import groq from 'groq'
import client from 'client'
// import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import Head from 'next/head'
import Layout from 'components/Layout'
import Inhalt from 'components/Inhalt'
import Ateliers from 'components/Ateliers'
import Link from 'next/link'

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

  return (
    <Layout>
      <Head>
        <title>Themenpfad | {title}</title>
      </Head>
      <div>
        <h2 className='anker mb-one'>Themenpfad</h2>
        <hr className='mb-one' />

        {/* INHALT */}
        {inhalt && <Inhalt inhalt={inhalt} />}
        {/* ATELIERS */}
        {/* {indexOfAteliers && <Ateliers ateliers={indexOfAteliers} />} */}
        {indexOfAteliers && (
          <>
            <h2 className='anker mb-one'>Ateliers</h2>
            <ul className='grid grid-cols-2 2xl:grid-cols-4 gap-1'>
              {indexOfAteliers.map((atelier) => (
                <li key={atelier.slug} className='lg:px-1'>
                  <hr className='mb-one' />
                  <Link
                    href='/ateliers/[slug]'
                    as={`/ateliers/${atelier.slug}`}
                  >
                    <a className={`link projekt ${atelier.slug} `}>
                      <img
                        src={urlFor(atelier.referencepic)
                          .width(2000)
                          .height(1600)
                          .url()}
                        srcSet={`${urlFor(atelier.referencepic)
                          .width(1024)
                          .height(819)
                          .format('webp')
                          .url()} 1024w, ${urlFor(atelier.referencepic)
                          .width(2000)
                          .height(1600)
                          .format('webp')
                          .url()} 2000w,`}
                        sizes='(max-width:1024px) 100vw, 50vw'
                        alt={`Referenzbild zu $ {atelier.title}`}
                        className='mb-one'
                      />
                      <div className=' mb-one'>
                        <h2 className='mb-one'>{atelier.titel}</h2>
                        <p className='mb-one'>{atelier.untertitel}</p>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </Layout>
  )
}

const query = groq`
  *[_type == "themenpfad"&& content.slug.current == $slug][0].content{
    title,
    referencepic,
    'inhalt': content,
    //'indexOfAteliers': ateliers[]->content{titel, untertitel, referencepic, standort, team, vorgehen, slideshow}
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
