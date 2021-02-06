import client from 'client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export default function Linkedpic({ linkedpic }) {
  return (
    <div className='linkedpic '>
      <figure key={linkedpic._key} className='mb-one lg:grid lg:grid-cols-4'>
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
          className='mb-one lg:col-span-3  lg:col-start-2'
        />
        {linkedpic.caption && (
          <figcaption className='lg:col-span-2 lg:col-start-2'>
            <BlockContent blocks={linkedpic.caption} {...client.config()} />
          </figcaption>
        )}
      </figure>
    </div>
  )
}
