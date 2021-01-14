import client from 'client'
import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'


function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

export default function Ateliers({ateliers}) {
    const attis = ateliers.map((atelier) => (
        <Link className="atelier mb-2" href={`/atelier/${atelier.slug.current}`}>
            <div>
                <h2>{atelier.titel}</h2>
                <img
                src={urlFor(atelier.referencepic)
                .url()}
                />  
                <BlockContent 
                blocks={atelier.excerpt}
                {...client.config()}
                />
            </div>
        </Link>

    ))
    return attis
}