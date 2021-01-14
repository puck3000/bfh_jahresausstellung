import client from 'client'
import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'


function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

export default function Ateliers({ateliers}) {
    const attis = ateliers.map((atelier) => (
            <li>
                <h2>{atelier.titel}</h2>
                <BlockContent 
                blocks={atelier?.excerpt}
                {...client.config()}
                />
                <img
                src={urlFor(atelier?.referencepic)
                .url()}
                />  
            </li>

    ))
    return (
        <ul className="grid grid-cols-2 gap-4">
            {
                attis
            }
        </ul>
    )
}