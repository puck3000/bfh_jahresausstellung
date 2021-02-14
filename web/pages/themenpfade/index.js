import groq from 'groq'
import client from 'client'
import Layout from 'components/Layout'
import Head from 'next/head'
import Inhalt from 'components/Inhalt'
import Link from 'next/link'
import { urlFor } from 'lib/sanity'
import BottomNav from 'components/BottomNav'
import MapModal from 'components/map/MapModal'
import Wegweiser from 'components/Wegweiser'

const ThemenpfadIndex = (props) => {
  const {
    title = 'Missing Title',
    inhalt,
    tpflist: themenpfade,
  } = props.themenpfadIndex

  return (
    <Layout>
      <Head>Themenpfade</Head>
      {/* Themenpfad Übersicht */}
      <div className='anker first mb-1 lg:mb-2'>{title}</div>

      <hr className='mb-1 lg:mb-2' />
      {inhalt && <Inhalt inhalt={inhalt} />}

      <Wegweiser />

      {/* Themenpfade Index */}
      {themenpfade && (
        <>
          <div className='flex flex-row justify-between mt-two lg:mt-big lg:grid lg:grid-cols-4'>
            <div>
              <h2 className='anker first mb-1 lg:mb-2 lg:inline-block'>
                Themenpfade
              </h2>
            </div>
          </div>
          <ul className='grid grid-cols-2 lg:grid-cols-4 gap-1'>
            {themenpfade.map((themenpfad, idx) => (
              <li key={`themenpfad${idx}`}>
                <hr className='mb-1 lg:mb-2' />
                <Link
                  key={themenpfad._id}
                  href='/themenpfade/[slug]'
                  as={`/themenpfade/${themenpfad.slug}`}
                  passHref
                >
                  <a className={` ${themenpfad.slug} `}>
                    <h2 className=''>{themenpfad.inhalt.title}</h2>
                    <img
                      src={urlFor(themenpfad.inhalt.referencepic)
                        .width(2000)
                        .height(1600)
                        .url()}
                      srcSet={`${urlFor(themenpfad.inhalt.referencepic)
                        .width(1024)
                        .height(819)
                        .format('webp')
                        .url()} 1024w, ${urlFor(themenpfad.inhalt.referencepic)
                        .width(2000)
                        .height(1600)
                        .format('webp')
                        .url()} 2000w,`}
                      sizes='(max-width:1024px) 100vw, 50vw'
                      alt={`Referenzbild zu $ {themenpfad.inhalt.title}`}
                      className='mb-1 lg:mb-2'
                    />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  )
}

const query = groq`*[_type == 'themenpfadeIndex'][1]{title, 'inhalt': content, 'tpflist': tpflist[]->{_id, 'slug': content.slug.current, 'inhalt': content }}`

// const getAllThemenpfade = groq `*[_type == 'themenpfad' && !(_id in path('drafts.**'))][]|order(content.title){_id, 'slug': content.slug.current, 'inhalt': content }`

export async function getStaticProps({ params }) {
  const themenpfadIndex = await client.fetch(query)
  // const themenpfade = await client.fetch(getAllThemenpfade)
  return {
    props: {
      themenpfadIndex,
      // themenpfade
    },
    revalidate: 1,
  }
}

export default ThemenpfadIndex
