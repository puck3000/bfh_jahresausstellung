import client from 'client'
import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

export default function Gallery({gallery}) {

    const slides = gallery.slide.map((slide) => (
                
        <figure key={slide._key} className="mb-2">
        <img
          src={urlFor(slide.pic)
            .width(2000)
            .height(1600)
            .format('webp')
            .url()}
          srcSet={
            `${urlFor(slide.pic)
              .width(1024)
              .height(819)
              .format('webp')
              .url()} 1024w, ${urlFor(slide.pic)
                .width(2000)
                .height(1600)
                .format('webp')
                .url()} 2000w,`
            }
          sizes="(max-width:1024px) 100vw, 50vw"
        />   
        { slide.caption && (
          <figcaption>
              <BlockContent 
              blocks={slide.caption}
              {...client.config()}
            />
          </figcaption>  
        )}
      </figure>
        )
      )
    return  slides
}