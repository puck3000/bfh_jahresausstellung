import client from 'client'
import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

export default function Linkedpic({linkedpic}) {
    return (
        <figure className="mb-2">
                <img
                  src={urlFor(linkedpic.image)
                  .url()}
                />   
                <figcaption>
                  <BlockContent 
                    blocks={linkedpic.caption}
                    {...client.config()}
                  />
                </figcaption>  
              </figure>
    )
}