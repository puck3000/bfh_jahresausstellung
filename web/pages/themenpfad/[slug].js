import groq from 'groq'
import client from 'client'
import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'
import Head from 'next/head'
import Layout from 'components/Layout'


function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Themenpfad = (props) => {
    const {
        title = 'Missing Title',
        lead = [],
        referencepic,
        anchor,
        lauftext,
        textandimage,
        linkedpic,
        gallery
      } = props
    
        return (
          <Layout>
          <Head>
            <title>Themenpfad | {title}</title>
          </Head>
          <div>
            <pre>The Title of this Themenpfad is:</pre>
            <h2>{title}</h2>
{/* LEAD */}
            {
              lead.length > 0 && 
              <>
                <pre>The Lead is:</pre>
                <BlockContent 
                  blocks={lead}
                  {...client.config()}
                />
              </>          
            }
{/* INHALT */}

  {/* ANKER */}
            {
              anchor && 
              <button>
                {anchor.anchorTag}
              </button>
            }
  {/* LAUFTEXT */}
            {
              lauftext && 
              <>
                <pre>The Lauftext is:</pre>
                <BlockContent 
                  blocks={lauftext.inhalt}
                  {...client.config()}
                />
              </>  
              
            }
  {/* LINKEDPIC */}
            {
              linkedpic &&
              <figure>
                <img
                  src={urlFor(linkedpic.image)
                  .url()}
                />   
                <figcaption>
                  <BlockContent 
                    blocks={linkedpic.caption}
                    {...client.config()}
                  />
                </figcaption>  
              </figure>
            }
  {/* TEXTANDIMAGE */}
            {
              textandimage &&
              <>
                 <img
                  src={urlFor(textandimage.image)
                  .url()}
                />  
                <BlockContent 
                    blocks={textandimage.text}
                    {...client.config()}
                  />
              </>
            }
  {/* GALLERY */}
            {
              gallery &&
              gallery.slide.map((slide) => (
                <img
                  src={urlFor(slide)
                  .url()}
                />  
                )
              )
            }
{/* REFERENCEPIC */}
            {
              referencepic && 
              <>
                <pre>The Referencepic is:</pre>
                <img
                  src={urlFor(referencepic)
                  .url()}
                />              
              </>
            }
          
            
          </div>
          </Layout>
        )
}


const query = groq `
  *[_type == "themenpfad"&& content.slug.current == $slug][0].content{
    title,
    referencepic,
    lead,
    'anchor': content[_type == 'anchor'][0],
    'lauftext': content[_type == 'lauftext'][0],
    'textandimage': content[_type == 'textandimage' ][0],
    'linkedpic': content[_type == 'linkedpic'][0],
    'gallery': content[_type == 'gallery'][0]
  }
`


Themenpfad.getInitialProps = async function(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.query
    return await client.fetch(query, { slug })
  }

export default Themenpfad