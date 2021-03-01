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
      className='textAndImage mb-1 lg:mb-2 lg:grid lg:grid-cols-4 2xl:grid-cols-8'
    >
      <div className='lg:col-span-1 2xl:col-span-2'>
        <BlockContent blocks={textandimage.text} {...client.config()} />
      </div>
      <img
        className='mb-1 lg:mb-2 lg:col-start-2 lg:col-span-3 2xl:col-start-3 2xl:col-span-4'
        src={urlFor(textandimage.image)
          .width(2000)
          .height(1600)
          .auto('format')
          .url()}
        srcSet={`${urlFor(textandimage.image)
          .width(1024)
          .height(819)
          .format('webp')
          .url()} 1024w, ${urlFor(textandimage.image)
          .width(2000)
          .height(1600)
          .auto('format')
          .url()} 2000w,`}
        sizes='(max-width:1024px) 100vw, 75vw'
      />
    </div>
  )
}
