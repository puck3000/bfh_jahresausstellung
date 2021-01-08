import client from 'client'
import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

export default function Gallery({gallery}) {

    const slides = gallery.slide.map((slide) => (
        <figure key={slide._key}>
        <img
          src={urlFor(slide.pic)
          .url()}
        />   
        <figcaption>
          <BlockContent 
            blocks={slide.caption}
            {...client.config()}
          />
        </figcaption>  
      </figure>
        )
      )
    return  slides
}