import { urlFor } from 'lib/sanity';
import { Component } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import {BiExpand} from 'react-icons/bi'

// const slides = [
//   '//placekitten.com/1500/500',
//   '//placekitten.com/4000/3000',
//   '//placekitten.com/800/1200',
//   '//placekitten.com/1500/1500',
// ];


export default class ProjLightBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      projekt: props.projekt,
    };
  }

  render() {
    const { photoIndex, isOpen, projekt } = this.state;

    const slides = projekt?.gallery?.slide?.map((slide) => (
      urlFor(slide.pic)
    ))
    
    return (
      <div className="mb-4">
        <hr className="mb-2"></hr>
        <button 
          className="relative"
          type="button" 
          onClick={() => this.setState({ isOpen: true })}>
          <img
            src={urlFor(projekt.referencepic)
              .width(2000)
              .height(1600)
              .format('webp')
              .url()}
            srcSet={
              `
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
              `
              }
            alt={`Referenzbild zu ${projekt.titel}`}
            className="mb-2"
          />
          <BiExpand 
            className="absolute top-2 right-2 bg-white"
            size="2rem"
            title="open project gallery"
          />
        </button>
        <div className="text-left">
          <h2 className="mb-2">{projekt.titel}</h2>
          { projekt.people && (
            <ul className="mb-2">
              {
                projekt.people?.map((person, i) => (
                  <li key={i}>{person}</li>
                ))
              }
            </ul>
          )}
          {
            projekt.download && (
              <div className="mb-2">
                <a href={`${projekt.download}?dl=`}>{projekt.download.label}</a>
              </div>
            )
          }
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
          />
        )}
      </div>
    );
  }
}