import client from 'client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import { MdArrowForward, MdArrowBack } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react'
import useIntersectionObserver from 'lib/useIntersectionObserver'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Keyboard } from 'swiper'
import 'swiper/swiper-bundle.css'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

SwiperCore.use([Navigation, Keyboard])

export default function SwiperGallery({ gallery }) {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [activeIndex, setactiveIndex] = useState(1)
  const slides = gallery.slide.map((slide) => (
    <SwiperSlide tag='figure' key={slide._key} className='mb-1'>
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
    </SwiperSlide>
  ))
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 mb-4'>
      <div className='lg:col-start-2 lg:col-span-3 2xl:col-start-2 2xl:col-span-2 relative'>
        <Swiper
          autoHeight
          loop
          keyboard
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
          }}
          onSlideChange={(swiper) => setactiveIndex(swiper.activeIndex)}
        >
          {slides}
          <div>
            <div className='flex justify-between'>
              <button className='prev cursor-pointer' ref={prevRef}>
                <MdArrowBack size='2em' />
              </button>
              <button className='next cursor-pointer' ref={nextRef}>
                <MdArrowForward size='2em' />
              </button>
            </div>
          </div>
          <div className='absolute top-4 right-4 text-big lg:text-big-dt z-40'>
            {activeIndex == slides.length || activeIndex == 0
              ? slides.length
              : activeIndex % slides.length}
            /{slides.length}
          </div>
        </Swiper>
      </div>
    </div>
  )
}
