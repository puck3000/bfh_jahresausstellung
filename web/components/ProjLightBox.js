import { urlFor } from 'lib/sanity'
import { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app
import { BiExpand } from 'react-icons/bi'

export default class ProjLightBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
      projekt: props.projekt,
    }
  }

  render() {
    const { photoIndex, isOpen, projekt } = this.state

    const slides = projekt?.gallery?.slide?.map((slide) =>
      urlFor(slide.pic).format('webp').url()
    )

    return (
      <div className=''>
        <hr className='mb-1 lg:mb-2 projFilter'></hr>
        <button
          className='relative'
          type='button'
          onClick={() => this.setState({ isOpen: true })}
        >
          <img
            src={urlFor(projekt.referencepic)
              .width(2000)
              .height(1600)
              .format('webp')
              .url()}
            srcSet={`
              ${urlFor(projekt.referencepic)
                .width(1024)
                .height(819)
                .format('webp')
                .url()} 1024w, 
              ${urlFor(projekt.referencepic)
                .width(2000)
                .height(1600)
                .format('webp')
                .url()} 2000w,
              `}
            alt={`Referenzbild zu ${projekt.titel}`}
            className='mb-2'
          />
          <BiExpand
            className='absolute top-2 right-2 bg-white'
            size='2rem'
            title='open project gallery'
          />
        </button>
        <div className='text-left'>
          <h2 className='projFilter mb-1 lg:mb-2'>{projekt.titel}</h2>
          {projekt.people && (
            <ul className=''>
              {projekt.people?.map((person, i) => (
                <li
                  key={i}
                  className='mb-1 lg:mb-2 text-small lg:text-small-dt'
                >
                  {person}
                </li>
              ))}
            </ul>
          )}
          {projekt.downloadURL && (
            <div className=''>
              <a
                href={`${projekt.downloadURL}?dl=`}
                className='anker first text-small lg:text-small-dt'
              >
                {projekt.downloadLABEL || 'Download'}
              </a>
            </div>
          )}
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={slides[photoIndex]}
            nextSrc={slides[(photoIndex + 1) % slides.length]}
            prevSrc={slides[(photoIndex + slides.length - 1) % slides.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + slides.length - 1) % slides.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % slides.length,
              })
            }
            imageTitle={projekt.titel}
          />
        )}
      </div>
    )
  }
}
