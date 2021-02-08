import client from 'client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { MdArrowForward, MdArrowBack } from 'react-icons/md'

// import { useState } from 'react'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const renderSlideInfo = ({ item, itemsCount }) => {
  return `${item}\ / ${itemsCount}`
}

const renderPrevButton = ({ isDisabled }) => {
  return (
    <span
      className='absolute left-0 bottom-2'
      style={{ opacity: isDisabled ? '0.5' : 1 }}
    >
      <MdArrowBack />
    </span>
  )
}

const renderNextButton = ({ isDisabled }) => {
  return (
    <span
      className='absolute right-0 bottom-2'
      style={{ opacity: isDisabled ? '0.5' : 1 }}
    >
      <MdArrowForward />
    </span>
  )
}

export default function Gallery({ gallery }) {
  const slides = gallery.slide.map((slide) => (
    <figure key={slide._key} className='mb-1'>
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
        className='mb-1 lg:mb-2'
      />
      {slide.caption && (
        <figcaption>
          <BlockContent blocks={slide.caption} {...client.config()} />
        </figcaption>
      )}
    </figure>
  ))
  return (
    <div className='lg:grid lg:grid-cols-4'>
      <div className='lg:col-start-2 lg:col-span-3 2xl:col-start-2 2xl:col-span-2 '>
        <AliceCarousel
          mouseTracking
          disableDotsControls
          infinite
          autoHeight
          disableSlideInfo={false}
          renderSlideInfo={renderSlideInfo}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
          items={slides}
        />
      </div>
    </div>
  )

  {
    /* <div>ItemCount: {state.itemsCount}</div> */
  }
}
