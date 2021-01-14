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
                    .width(2000)
                    .height(1600)
                    .format('webp')
                    .url()
                }
                srcSet={
                    `${urlFor(textandimage.image)
                    .width(1024)
                    .height(819)
                    .format('webp')
                    .url()} 1024w, ${urlFor(textandimage.image)
                        .width(2000)
                        .height(1600)
                        .format('webp')
                        .url()} 2000w,`
                }
                sizes="(max-width:1024px) 100vw, 50vw"
            />
             
            <BlockContent 
                className="mb-2"
                blocks={textandimage.text}
                {...client.config()}
            />
        </>
    )
}