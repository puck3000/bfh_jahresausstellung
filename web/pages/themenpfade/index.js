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
    inhalt
  
  } = props.themenpfadIndex

  const themenpfade = props.themenpfade

    return (
        <Layout>
            <Head>Themenpfade</Head>
{/* Themenpfad Übersicht */}
            <h1>{title}</h1>
            { inhalt && <Inhalt inhalt={inhalt}/> }
{/* Themenpfade Index */}
            {    
                themenpfade.map((themenpfad ) => (
                    <Link key={themenpfad._id} href="/themenpfade/[slug]" as={`/themenpfade/${themenpfad.slug}`}>
                        <div className={`link projekt ${themenpfad.slug} mb-2`}>
                            <hr></hr>
                            <h2 className="mt-1 mb-2">{themenpfad.inhalt.title}</h2>
                            <img 
                                src={urlFor(themenpfad.inhalt.referencepic)}
                                alt={`Referenzbild zu $ {themenpfad.inhalt.title}`}
                                className="mb-1"
                            />
                            <SanityBlockContent 
                                blocks={themenpfad.inhalt.lead}
                                {...client.config}
                            />
                        </div>
                    </Link>

                )) 
            }            

        </Layout>
    )
}

const query = groq `*[_type == 'themenpfadeIndex'][1]{title, 'inhalt': content}`

const getAllThemenpfade = groq `*[_type == 'themenpfad' && !(_id in path('drafts.**'))][]|order(content.title){_id, 'slug': content.slug.current, 'inhalt': content }`

export async function getStaticProps({params}) {
    const themenpfadIndex = await client.fetch(query)
    const themenpfade = await client.fetch(getAllThemenpfade)
    return {
      props: {
        themenpfadIndex,
        themenpfade
      },
    }
  }

export default ThemenpfadIndex;