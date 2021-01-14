import client from 'client'
import BlockContent from '@sanity/block-content-to-react' 
import { urlFor } from 'lib/sanity';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Slideshow = ({slides}) => {


    const handleDragStart = (e) => e.preventDefault();

    const items = slides.slide.map((slide) => (
                
        <figure onDragStart={handleDragStart} key={slide._key} className="mb-2">
        <img
          src={urlFor(slide.pic)
            .width(2000)
            .height(1600)
            .format('webp')
            .url()}
          srcSet={
            `${urlFor(slide.pic)
              .width(1024)
              .height(819)
              .format('webp')
              .url()} 1024w, ${urlFor(slide.pic)
                .width(2000)
                .height(1600)
                .format('webp')
                .url()} 2000w,`
            }
          sizes="(max-width:1024px) 100vw, 50vw"
        />   
        { slide.caption && (
          <figcaption>
              <BlockContent 
              blocks={slide.caption}
              {...client.config()}
            />
          </figcaption>  
        )}
      </figure>
        )
      )

    // <img src="path-to-img" onDragStart={handleDragStart} className="yours-custom-class" />,
   
    ;

  return (
    <AliceCarousel 
        mouseTracking
        disableDotsControls
        infinite items={items} 
    />
  );
}

export default Slideshow