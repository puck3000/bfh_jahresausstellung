import groq from 'groq'
import client from 'client'
import Layout from 'components/Layout'
import Head from 'next/head'
import Inhalt from 'components/Inhalt'
import Link from 'next/link'
import { urlFor } from 'lib/sanity'

const ProjektIndex = (props) => {
  const {
    title = 'Missing Title',
    inhalt
  
  } = props.projektIndex
  const 
    projekte
   = props.projekte
    return (
        <Layout>
            <Head>Projektübersicht</Head>
{/* Projektübersicht */}
            <h1>{title}</h1>
            { inhalt && <Inhalt inhalt={inhalt}/> }
{/* Projektindex */}
            {    
                projekte.map((projekt) => (
                  <Link key={projekt._id} href="/projekt/[slug]" as={`/projekt/${projekt.slug}`}>
                    <div className={`link projekt ${projekt.slug} mb-2`}>
                      <hr></hr>
                      <h2 className="mt-1 mb-2">{projekt.titel}</h2>
                      <img 
                        src={urlFor(projekt.referencepic)}
                        alt={`Referenzbild zu ${projekt.titel}`}
                        className="mb-1"
                      />
                      { projekt.people && (
                        <ul>
                          {
                            projekt.people?.map((person, i) => (
                              <li key={i}>{person}</li>
                            ))
                          }
                        </ul>
                      )
                        
                      }
                    </div>
                  </Link>
                ))   
            }
        </Layout>
    )
}

const query = groq `*[_type == 'projekteIndex'][0]{title, 'inhalt': content}`

const getAllProjekte = groq `*[_type == 'projekt'][]{_id, 'slug': content.slug.current, 'people': content.people, 'titel': content.titel, 'referencepic': content.referencepic, 'atelier': content.atelier}`

export async function getStaticProps({params}) {
    const projektIndex = await client.fetch(query)
    const projekte = await client.fetch(getAllProjekte)
  
    return {
      props: {
        projektIndex,
        projekte
      },
    }
  }

export default ProjektIndex;