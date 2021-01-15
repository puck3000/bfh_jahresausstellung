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
    tpflist: themenpfade
  
  } = props.themenpfadIndex

  // const themenpfade = props.themenpfade

    return (
        <Layout>
            <Head>Themenpfade</Head>
{/* Themenpfad Übersicht */}
            <h1 className="mb-2">{title}</h1>
            { inhalt && <Inhalt inhalt={inhalt}/> }
{/* Themenpfade Index */}
            { themenpfade && (
              <ul className="grid grid-cols-2 gap-4">
                {
                  themenpfade.map((themenpfad ) => (
                    <li>
                      <Link key={themenpfad._id} href="/themenpfade/[slug]" as={`/themenpfade/${themenpfad.slug}`} passHref>
                          <a className={`link projekt ${themenpfad.slug} mb-2`}>
                              <hr></hr>
                              <h2 className="mt-1 mb-2">{themenpfad.inhalt.title}</h2>
                              <img
                                src={urlFor(themenpfad.inhalt.referencepic)
                                    .width(2000)
                                    .height(1600)
                                    .format('webp')
                                    .url()
                                  }
                                  srcSet={
                                    `${urlFor(themenpfad.inhalt.referencepic)
                                      .width(1024)
                                    .height(819)
                                    .format('webp')
                                    .url()} 1024w, ${urlFor(themenpfad.inhalt.referencepic)
                                      .width(2000)
                                      .height(1600)
                                      .format('webp')
                                      .url()} 2000w,`
                                    }
                                    sizes="(max-width:1024px) 100vw, 50vw"
                                    alt={`Referenzbild zu $ {themenpfad.inhalt.title}`}
                                    className="mb-1"
                                    />
                              {/* <SanityBlockContent 
                                  blocks={themenpfad.inhalt.lead}
                                  {...client.config}
                                /> */}
                          </a>
                      </Link>
                    </li>

                )) 
                }
              </ul>
            )   
                
            }            

        </Layout>
    )
}

const query = groq `*[_type == 'themenpfadeIndex'][1]{title, 'inhalt': content, 'tpflist': tpflist[]->{_id, 'slug': content.slug.current, 'inhalt': content }}`

// const getAllThemenpfade = groq `*[_type == 'themenpfad' && !(_id in path('drafts.**'))][]|order(content.title){_id, 'slug': content.slug.current, 'inhalt': content }`

export async function getStaticProps({params}) {
    const themenpfadIndex = await client.fetch(query)
    // const themenpfade = await client.fetch(getAllThemenpfade)
    return {
      props: {
        themenpfadIndex,
        // themenpfade
      },
      revalidate: 1
    }
  }

export default ThemenpfadIndex;