import client from 'client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export default function TextAndImage({ textandimage }) {
  return (
    <div
      key={textandimage._key}
      className='textAndImage mb-one lg:grid lg:grid-cols-4 2xl:grid-cols-8'
    >
      <BlockContent blocks={textandimage.text} {...client.config()} />
      <img
        className='lg:col-start-2 lg:col-span-3 2xl:col-start-3 2xl:col-span-4'
        src={urlFor(textandimage.image).width(2000).height(1600).url()}
        srcSet={`${urlFor(textandimage.image)
          .width(1024)
          .height(819)
          .format('webp')
          .url()} 1024w, ${urlFor(textandimage.image)
          .width(2000)
          .height(1600)
          .format('webp')
          .url()} 2000w,`}
        sizes='(max-width:1024px) 100vw, 75vw'
      />
    </div>
  )
}
