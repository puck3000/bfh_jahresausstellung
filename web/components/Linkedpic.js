import client from 'client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export default function Linkedpic({ linkedpic }) {
  return (
    <figure className='mb-2'>
      <img
        src={urlFor(linkedpic.image).width(2000).height(1600).url()}
        srcSet={`${urlFor(linkedpic.image)
          .width(1024)
          .height(819)
          .format('webp')
          .url()} 1024w, ${urlFor(linkedpic.image)
          .width(2000)
          .height(1600)
          .format('webp')
          .url()} 2000w,`}
        sizes='(max-width:1024px) 100vw, 50vw'
      />
      <figcaption>
        <BlockContent blocks={linkedpic.caption} {...client.config()} />
      </figcaption>
    </figure>
  )
}
