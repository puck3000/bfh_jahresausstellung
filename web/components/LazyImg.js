import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { get, omit } from 'lodash'
import client from 'client'
import imageUrlBuilder from '@sanity/image-url'

function urlFor(source) {
  return imageUrlBuilder(client).image(source).auto('format').fit('max')
}

const DEFAULT_WIDTH = 500
const DEFAULT_WIDTHS = [320, 480, 640, 800, 1440]
const DEFAULT_SIZES = `(max-width: 320px) 280px, (max-width: 480px) 440px, 800px`

// eslint-disable-next-line complexity
const Image = (props) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  })
  const [isLoaded, setLoaded] = useState(0)

  // When an image is in the browser cache or is completed loading before react rehydration,
  // the `onload` may not be triggered. In order to ensure we have the correct "complete"
  // state, check the `complete` property after mounting
  const imgRef = React.createRef()
  useEffect(() => {
    if (
      imgRef &&
      imgRef.current &&
      imgRef.current.complete &&
      imgRef.current.naturalWidth
    ) {
      setLoaded(true)
    }
  })

  const {
    image,
    alt,
    src,
    aspect,
    srcSet,
    width = DEFAULT_WIDTH,
    fit = 'clip',
    sizes = DEFAULT_SIZES,
    widths = DEFAULT_WIDTHS,
    lazy = 'true',
  } = props

  if (!src && (!image || !image.asset)) {
    return <img />
  }

  const showImage = lazy === 'false' || !!inView
  const orgWidth = get(image, 'asset.metadata.dimensions.width')
  const orgHeight = get(image, 'asset.metadata.dimensions.height')
  const aspectRatio = aspect || orgWidth / orgHeight || null
  const defaultSrcSetParts = aspectRatio
    ? widths.map(
        (sourceW) =>
          `${urlFor(image)
            .width(sourceW)
            .height(Math.round(sourceW / aspectRatio))
            .fit(fit)
            .url()} ${sourceW}w`
      )
    : widths.map(
        (sourceW) => `${urlFor(image).width(sourceW).url()} ${sourceW}w`
      )

  const defaultSrcSet = defaultSrcSetParts.join(',')

  const height = aspectRatio ? Math.round(width / aspectRatio) : null

  const computedSrc = urlFor(image)
    .width(width)
    // .height(height)
    .fit(fit)
    .url()

  const className = [props.className, css.root].filter(Boolean).join(' ')
  const bg = get(image, 'asset.metadata.palette.dominant.background')
  const lqip = get(image, 'asset.metadata.lqip')
  return (
    <div
      className={className}
      data-has-aspect={!!aspectRatio}
      style={{
        paddingBottom: aspectRatio ? `${100 / aspectRatio}%` : undefined,
      }}
    >
      <div
        ref={inViewRef}
        className={css.lqip}
        data-is-loaded={isLoaded}
        aria-hidden='true'
        style={{
          backgroundColor: bg,
          backgroundImage: lqip && `url(${lqip})`,
        }}
      />
      <img
        {...omit(props, [
          'image',
          'className',
          'aspect',
          'width',
          'height',
          'widths',
          'lazy',
          'clip',
        ])}
        alt={alt || (image && image.alt)}
        ref={imgRef}
        srcSet={showImage && !src ? defaultSrcSet || srcSet : undefined}
        sizes={sizes}
        src={showImage ? src || computedSrc : undefined}
        className={css.img}
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
      <style jsx global>
        {`
          .root {
            display: block;
            position: relative;
          }

          .lqip {
            image-rendering: pixelated;
            width: 100%;
            opacity: 1;
            transition: opacity 50ms 100ms ease-out;

            @nest .root[data-has-aspect='true'] & {
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              z-index: 0;
              background-size: 100% 100%;
            }

            @nest &[data-is-loaded='true'] {
              opacity: 0;
            }
          }

          .img {
            image-rendering: auto;
            display: block;
            width: 100%;

            @nest .root[data-has-aspect='true'] & {
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              z-index: 1;
            }
          }
        `}
      </style>
    </div>
  )
}

Image.propTypes = {
  image: PropTypes.object,
  className: PropTypes.string,
  alt: PropTypes.string,
  aspect: PropTypes.number,
  src: PropTypes.string,
  fit: PropTypes.string,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  width: PropTypes.number,
  lazy: PropTypes.string,
  widths: PropTypes.arrayOf(PropTypes.number),
}

export default Image
