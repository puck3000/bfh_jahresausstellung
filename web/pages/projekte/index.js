import groq from 'groq'
import client from 'client'
import Layout from 'components/Layout'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md'

const ProjLightBox = dynamic(() => import('components/ProjLightBox'))
const ProjIndexView = dynamic(() => import('components/ProjIndexView'))

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
      <Head>
        <title>{title} | BFH Jahresausstellung 2021</title>
      </Head>
      <div className='anker first mb-1 lg:mb-2'>{title}</div>
      {/* Projektindex */}
      {projekte && (
        <>
          <div className='flex h-10'>
            <MdSearch size='1.5em' />
            <input
              type='text'
              placeholder='Suche'
              value={searchTerm}
              onChange={handleChange}
              className='w-full inline-block'
            />
          </div>
          <hr className='mb-one lg:mb-two'></hr>
          <ul className='grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-2'>
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

const query = groq`*[_type == 'projekteIndex'][0]{title, 'inhalt': content, 'projektlist': projlist[]->{_id, 'slug': content.slug.current, 'people': content.people, 'titel': content.titel, 'referencepic': content.referencepic, 'atelier': content.atelier->content.slug.current, 'gallery': content.gallery, 'downloadURL': content.download.asset->url, 'downloadLABEL': content.download.label}}`

export async function getStaticProps({ params }) {
  const projektIndex = await client.fetch(query)

  return {
    props: {
      projektIndex,
    },
    revalidate: 100,
  }
}

export default ProjektIndex
