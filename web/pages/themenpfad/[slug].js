import groq from 'groq'
import client from '../../client'
import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'
import Head from 'next/head'


function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Themenpfad = (props) => {
    const {
        title = 'Missing Title',
        lead = [],
        referencepic
      } = props
        return (
          <>
          <Head>
            <title>Themenpfad | {title}</title>
          </Head>
          <div>
            <pre>The Title of this Themenpfad is:</pre>
            <h2>{title}</h2>
            <pre>The Lead is:</pre>
            <BlockContent 
              blocks={lead}
              {...client.config()}
            />
            <pre>The Referencepic is:</pre>
            <img
              src={urlFor(referencepic)
              .width(500)
              .url()}
            />
          </div>
          </>
        )
}


const query = groq `
        *[_type == "themenpfad"&& content.slug.current == $slug][0].content
    `


Themenpfad.getInitialProps = async function(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.query
    return await client.fetch(query, { slug })
  }

export default Themenpfad