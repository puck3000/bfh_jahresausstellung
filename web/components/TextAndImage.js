import client from 'client'
import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

export default function TextAndImage({textandimage}) {
    return (
        <>
            <img
            className="mb-2"
                src={urlFor(textandimage.image)
            .url()}
            />  
            <BlockContent 
                className="mb-2"
                blocks={textandimage.text}
                {...client.config()}
            />
        </>
    )
}