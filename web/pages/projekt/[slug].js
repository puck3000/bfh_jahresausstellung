import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'
import client from 'client'
import Layout from 'components/Layout'
import Head from 'next/head'
import Gallery from 'components/Gallery'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Project = (props) => {
  const { 
    titel = 'Missing title', 
    people,
    gallery,
  } = props
    
  return (
    <Layout>
      <Head>
        <title>Projekte | {titel}</title>
      </Head>
      <h2 className="mb-2">{titel}</h2>
{/* People */}
      {people && (
        <ul>
          { people.map((person) => <li>{person}</li>) }
        </ul>
      )}
{/* GALLERY */}
      { gallery && <Gallery gallery={gallery} /> }
    </Layout>
  )
}

const query = groq `*[_type == "projekt" && content.slug.current == $slug][0].content
    {
      titel, 
      people,
      gallery,
      slug  
    }
  `


Project.getInitialProps = async function(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.query
    return await client.fetch(query, { slug })
  }

export default Project