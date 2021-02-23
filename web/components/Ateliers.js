import client from 'client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import Inhalt from 'components/Inhalt'
import Team from 'components/Team'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export default function Ateliers({ ateliers }) {
  const attis = ateliers.map((atelier, index) => (
    <li key={index}>
      <hr className='mb-2' />
      <h2 className='my-2'>{atelier.titel}</h2>
      {/* Team */}
      {atelier.team && <Team team={atelier.team} />}
      {/* Vorgehen */}
      {atelier.vorgehen && <Inhalt inhalt={atelier.vorgehen} />}
      {/* Standort */}
      {atelier.standort && <p className='mb-2'>{atelier.standort}</p>}

      <Link href='/projekte'>
        <a> zu den Projekten</a>
      </Link>
    </li>
  ))
  return <ul>{attis}</ul>
}
