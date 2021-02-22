import client from 'client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import 'react-alice-carousel/lib/alice-carousel.css'
import { MdArrowForward, MdArrowBack } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react'
import useIntersectionObserver from 'lib/useIntersectionObserver'
import dynamic from 'next/dynamic'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const AliceCarousel = dynamic(() =>
  import('../node_modules/react-alice-carousel')
)
const renderSlideInfo = ({ item, itemsCount }) => {
  return `${item}/${itemsCount}`
}

const renderPrevButton = ({ isDisabled }) => {
  return (
    <span
      className='absolute left-0 -bottom-4'
      style={{ opacity: isDisabled ? '0.5' : 1 }}
    >
      <MdArrowBack size='2em' />
    </span>
  )
}

const renderNextButton = ({ isDisabled }) => {
  return (
    <span
      className='absolute right-0 -bottom-4'
      style={{ opacity: isDisabled ? '0.5' : 1 }}
    >
      <MdArrowForward size='2em' />
    </span>
  )
}

export default function Gallery({ gallery }) {
  const gallerySection = useRef(null)
  const isGalleryVisible = useIntersectionObserver(gallerySection)
  const [activeIndex, setactiveIndex] = useState()
  const [adaptiveHeight, setAdaptiveHeight] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAdaptiveHeight(true)
      // setactiveIndex(0)
    }, 1000)
  }, [isGalleryVisible]) // <-- empty array means 'run once'

  const slides = gallery.slide.map((slide) => (
    <figure key={slide._key} className='mb-1'>
      <img
        src={urlFor(slide.pic)
          .auto('format')
          .maxWidth(1000)
          .fit('max')
          .crop('focalpoint')
          .quality(80)
          .url()}
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
    <div className='grid grid-cols-1 lg:grid-cols-4 mb-4'>
      <div
        className='lg:col-start-2 lg:col-span-3 2xl:col-start-2 2xl:col-span-2 '
        ref={gallerySection}
      >
        {isGalleryVisible && (
          <AliceCarousel
            mouseTracking
            disableDotsControls
            infinite
            autoHeight={adaptiveHeight}
            disableSlideInfo={false}
            renderSlideInfo={renderSlideInfo}
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
            items={slides}
            activeIndex={activeIndex}
          />
        )}
      </div>
    </div>
  )
}
