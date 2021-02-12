import client from 'client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { MdArrowForward, MdArrowBack } from 'react-icons/md'
import { useState } from 'react'

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
  const [initReload, setinitReload] = useState(0)

  const onInit = () => {
    setTimeout(setinitReload(1), 1000)
  }

  const slides = gallery.slide.map((slide) => (
    <figure key={slide._key} className='mb-1'>
      <img src={urlFor(slide.pic).url()} className='mb-1 lg:mb-2' />
      {slide.caption && (
        <figcaption>
          <BlockContent blocks={slide.caption} {...client.config()} />
        </figcaption>
      )}
    </figure>
  ))
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4'>
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
          onInitialized={onInit}
        />
      </div>
    </div>
  )
}
