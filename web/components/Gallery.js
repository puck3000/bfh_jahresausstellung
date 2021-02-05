import client from 'client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import { useState } from 'react'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const renderSlideInfo = ({ item, itemsCount }) => {
  return `${item}\ / ${itemsCount}`
}

export default function Gallery({ gallery }) {
  const slides = gallery.slide.map((slide) => (
    <figure key={slide._key} className='mb-2'>
      <img
        src={urlFor(slide.pic).width(2000).height(1600).format('webp').url()}
        srcSet={`${urlFor(slide.pic)
          .width(1024)
          .height(819)
          .format('webp')
          .url()} 1024w, ${urlFor(slide.pic)
          .width(2000)
          .height(1600)
          .format('webp')
          .url()} 2000w,`}
        sizes='(max-width:1024px) 100vw, 50vw'
      />
      {slide.caption && (
        <figcaption>
          <BlockContent blocks={slide.caption} {...client.config()} />
        </figcaption>
      )}
    </figure>
  ))
  return (
    <AliceCarousel
      mouseTracking
      disableDotsControls
      infinite
      autoHeight
      disableSlideInfo={false}
      renderSlideInfo={renderSlideInfo}
      items={slides}
    />
  )

  {
    /* <div>ItemCount: {state.itemsCount}</div> */
  }
}
