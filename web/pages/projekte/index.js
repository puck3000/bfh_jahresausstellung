import groq from 'groq'
import client from 'client'
import Layout from 'components/Layout'
import Head from 'next/head'
import ProjLightBox from 'components/ProjLightBox'
import Link from 'next/link'
import ProjIndexView from 'components/ProjIndexView'
import { useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md'

const ProjektIndex = (props) => {
  const {
    title = 'Missing Title',
    inhalt,
    projektlist: projekte,
  } = props.projektIndex

  const [searchTerm, setsearchTerm] = useState('')
  const [searchResults, setsearchResults] = useState([])

  const handleChange = (event) => {
    setsearchTerm(event.target.value.toLowerCase())
  }

  useEffect(() => {
    const results = projekte.filter(
      (projekt) =>
        projekt.titel.toLowerCase().includes(searchTerm) ||
        // projekt.atelier.toLowerCase().includes(searchTerm) ||
        projekt.people.some((peep) => peep.toLowerCase().includes(searchTerm))
    )
    setsearchResults(results)
  }, [searchTerm])

  return (
    <Layout>
      <Head>Projektübersicht</Head>
      {/* Projektübersicht */}
      <h1 className='mb-4'>{title}</h1>
      {/* {inhalt && <Inhalt inhalt={inhalt} />} */}
      {/* Projektindex */}
      {projekte && (
        <>
          <div className='flex mb-two border-b-2 border-black h-10'>
            <MdSearch size='1.5em' />
            <input
              type='text'
              placeholder='Suche'
              value={searchTerm}
              onChange={handleChange}
              className='w-full inline-block'
            />
          </div>
          <ul className='grid grid-cols-2 lg:grid-cols-4 gap-1'>
            {searchResults.map((projekt) => (
              <li key={projekt._id}>
                {projekt.gallery ? (
                  <ProjLightBox projekt={projekt} />
                ) : (
                  <ProjIndexView projekt={projekt} />
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  )
}

const query = groq`*[_type == 'projekteIndex'][0]{title, 'inhalt': content, 'projektlist': projlist[]->{_id, 'slug': content.slug.current, 'people': content.people, 'titel': content.titel, 'referencepic': content.referencepic, 'atelier': content.atelier->content.titel, 'gallery': content.gallery, 'downloadURL': content.download.asset->url, 'downloadLABEL': content.download.label}}`

export async function getStaticProps({ params }) {
  const projektIndex = await client.fetch(query)

  return {
    props: {
      projektIndex,
    },
    revalidate: 1,
  }
}

export default ProjektIndex
