import groq from 'groq'
import client from 'client'
import Layout from 'components/Layout'
import Head from 'next/head'
import Inhalt from 'components/Inhalt'
import ProjLightBox from 'components/ProjLightBox'
import Link from 'next/link'
import { urlFor } from 'lib/sanity'
import ProjIndexView from 'components/ProjIndexView'

const ProjektIndex = (props) => {
  const {
    title = 'Missing Title',
    inhalt,
    projektlist: projekte,
  
  } = props.projektIndex
    return (
        <Layout>
            <Head>Projektübersicht</Head>
{/* Projektübersicht */}
            <h1 className="mb-4">{title}</h1>
            { inhalt && <Inhalt inhalt={inhalt}/> }
{/* Projektindex */}
            { projekte && (
              <ul className="grid grid-cols-2 gap-1">
                {
                  projekte.map((projekt) => (
                    <li>
                      {
                        projekt.gallery ? 
                          <ProjLightBox projekt={projekt}/>
                          :
                          <ProjIndexView projekt={projekt}/>
                      }
                    </li> 
                  ))
                }
              </ul>
            )}
            <Link href="/themenpfade" passHref>
              <a>zurück zu den Themenpfaden</a>
            </Link>
        </Layout>
    )
}

const query = groq `*[_type == 'projekteIndex'][0]{title, 'inhalt': content, 'projektlist': projlist[]->{_id, 'slug': content.slug.current, 'people': content.people, 'titel': content.titel, 'referencepic': content.referencepic, 'atelier': content.atelier, 'gallery': content.gallery, 'downloadURL': content.download.asset->url, 'downloadLABEL': content.download.label}}`

export async function getStaticProps({params}) {
    const projektIndex = await client.fetch(query)
  
    return {
      props: {
        projektIndex,
      },
      revalidate: 1
    }
  }

export default ProjektIndex;