import client from 'client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { MdArrowForward, MdArrowBack } from 'react-icons/md'
import { useContext, useEffect, useState } from 'react'
import { AkkordeonContext } from './InhaltAkkordeon'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const renderSlideInfo = ({ item, itemsCount }) => {
  return `${item}/${itemsCount}`
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

function LazyLoader(props) {
  let timerId
  const { src = '', caption, metadata, onLoad } = props
  const [isMounted, setMounted] = useState(false)
  const [isLoading, setLoading] = useState(true)

  function loadImage() {
    const image = new Image()

    image.src = src
    image.onload = () => {
      setLoading(false)
      onLoad()
    }
  }

  const figure = (
    <figure
      className='mb-1'
      //   style={{
      //     backgroundImage: `url(${metadata.lqip})`,
      //     paddingTop: `calc(100% / ${metadata.dimensions.aspectRatio})`,
      //   }}
    >
      <img src={src} className='mb-1 lg:mb-2' />
      {caption && (
        <figcaption>
          <BlockContent blocks={caption} {...client.config()} />
        </figcaption>
      )}
    </figure>
  )

  useEffect(() => {
    if (!isMounted) {
      setMounted(true)
      loadImage()
    }
    return () => clearTimeout(timerId)
  }, [])

  return isLoading ? <div>Loading Gallery...</div> : figure
}

export default function LazyGal({ gallery }) {
  const [, setTimestamp] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const onLoad = () => setTimestamp(Date.now())
  const onSlideChanged = ({ item }) => setActiveIndex(item)

  const items = gallery.slide?.map((slide) => {
    return (
      <LazyLoader
        key={slide._key}
        onLoad={onLoad}
        src={urlFor(slide.pic)
          .auto('format')
          .maxWidth(1000)
          .fit('max')
          .crop('focalpoint')
          .quality(80)
          .url()}
        srcSet={`${urlFor(slide.pic)
          .auto('format')
          .width(1024)
          .height(819)
          .url()} 1024w, ${urlFor(slide.pic)
          .width(2000)
          .height(1600)
          .url()} 2000w,`}
        sizes='(max-width:1024px) 100vw, 75vw'
        caption={slide.caption}
        metadata={slide.metadata}
      />
    )
  })

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
          onSlideChanged={onSlideChanged}
          activeIndex={activeIndex}
          items={items}
        />
      </div>
    </div>
  )
}
