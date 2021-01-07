import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'
import client from 'client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Project = (props) => {
  const { 
    title = 'Missing title', 
    atelierName = 'Atelier fehlt', 
    referencepic,
    content = [],
    gallery,
    slides = []
  } = props
    
  return (
    <article>
      <h2>Titel: {title}</h2>
      <p>Das Projekt <span>{title}</span> ist Teil des Atelier <span>{atelierName}</span>.</p>
      {
        referencepic && (
          <div>
          <h3>referencepic:</h3>
          <img
            src={urlFor(referencepic)
              .width(500)
              .url()}
          />
        </div>
        )
      }
      <BlockContent
        blocks={content}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
      {gallery && (
        <div>
          <h3>Gallery:</h3>
          {slides.map(slide => <li key={slide._ref}><img
            src={urlFor(slide)
              .width(500)
              .url()}
          /></li>)}
          
        </div>
      )}
    </article>
  )
}

const query = groq `*[_type == "projekt" && slug.current == $slug][0]
    {
      title, 
      "atelierName": atelier->title,
      "referencepic": referencepic,
      content,
      "gallery": gallery,
      "slides": gallery.slide[].pic
      
    }
  `


Project.getInitialProps = async function(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.query
    return await client.fetch(query, { slug })
  }

export default Project