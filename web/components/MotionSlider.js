import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import client from 'client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import { MdArrowForward, MdArrowBack } from 'react-icons/md'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      height: 'auto ',
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    height: 'auto',
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      height: 0,
    }
  },
}

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export default function MotionSlider({ gallery }) {
  const [[page, direction], setPage] = useState([0, 0])

  // preparing slideData:
  const slides = []
  gallery.slide.map((slide) => {
    slides.push({ url: slide.pic, caption: slide.caption })
  })

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const slideIndex = wrap(0, slides.length, page)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 mb-4'>
      <div className='lg:col-start-2 lg:col-span-3 2xl:col-start-2 relative 2xl:col-span-2'>
        <div>
          <AnimatePresence initial={false} custom={direction}>
            <motion.figure
              key={page}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
            >
              <img
                src={urlFor(slides[slideIndex].url)
                  .auto('format')
                  .maxWidth(1000)
                  .fit('max')
                  .crop('focalpoint')
                  .quality(80)
                  .url()}
                className='mb-1 lg:mb-2'
              />
              {slides[slideIndex].caption && (
                <figcaption>
                  <BlockContent
                    blocks={slides[slideIndex].caption}
                    {...client.config()}
                  />
                </figcaption>
              )}
            </motion.figure>
          </AnimatePresence>
          {/* Counter */}
          <div className='absolute top-4 right-4 text-big lg:text-big-dt'>
            {slideIndex + 1}/{slides.length}
          </div>
          {/* Arrows */}
          <div className='flex justify-between'>
            <div className='prev' onClick={() => paginate(-1)}>
              <MdArrowBack size='2em' />
            </div>
            <div className='next' onClick={() => paginate(1)}>
              <MdArrowForward size='2em' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
