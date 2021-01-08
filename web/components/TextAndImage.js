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
                src={urlFor(textandimage.image)
            .url()}
            />  
            <BlockContent 
                blocks={textandimage.text}
                {...client.config()}
            />
        </>
    )
}