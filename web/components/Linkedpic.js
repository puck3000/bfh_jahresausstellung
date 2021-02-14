import client from 'client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export default function Linkedpic({ linkedpic }) {
  return (
    <div className='linkedpic lg:'>
      <figure
        key={linkedpic._key}
        className='mb-1 lg:mb-2 lg:grid lg:grid-cols-4 2xl:grid-cols-8'
      >
        <img
          src={urlFor(linkedpic.image).width(2000).height(1600).url()}
          srcSet={`${urlFor(linkedpic.image)
            .width(1024)
            .height(819)
            .url()} 1024w, ${urlFor(linkedpic.image)
            .width(2000)
            .height(1600)
            .format('webp')
            .url()} 2000w,`}
          sizes='(max-width:1024px) 100vw, 75vw'
          className='mb-1 lg:mb-2 lg:col-span-3 lg:col-start-2 2xl:col-start-3 2xl:col-span-4'
        />
        {linkedpic.caption && (
          <figcaption className='text-small lg:text-small-dt lg:col-span-2 lg:col-start-2 2xl:col-start-3 2xl:col-span-3'>
            <BlockContent blocks={linkedpic.caption} {...client.config()} />
          </figcaption>
        )}
      </figure>
    </div>
  )
}
