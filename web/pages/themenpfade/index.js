import groq from 'groq'
import client from 'client'
import Layout from 'components/Layout'
import Head from 'next/head'
import Inhalt from 'components/Inhalt'
import Link from 'next/link'
import { urlFor } from 'lib/sanity'
import SanityBlockContent from '@sanity/block-content-to-react'

const ThemenpfadIndex = (props) => {
  const {
    title = 'Missing Title',
    inhalt,
    tpflist: themenpfade,
  } = props.themenpfadIndex

  // const themenpfade = props.themenpfade

  return (
    <Layout>
      <Head>Themenpfade</Head>
      {/* Themenpfad Übersicht */}
      <h1 className='anker mb-one'>{title}</h1>
      <hr className='mb-one' />
      {inhalt && <Inhalt inhalt={inhalt} />}
      {/* Themenpfade Index */}
      {themenpfade && (
        <>
          <h2 className='anker mb-one'>Themenpfade</h2>
          <hr className='mb-one' />
          <ul className='grid grid-cols-2 gap-1'>
            {themenpfade.map((themenpfad) => (
              <li>
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
                      className='mb-1'
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
