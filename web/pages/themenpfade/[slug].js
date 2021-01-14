import groq from 'groq'
import client from 'client'
// import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'
import Head from 'next/head'
import Layout from 'components/Layout'
import Inhalt from 'components/Inhalt'
import Ateliers from 'components/Ateliers'


function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Themenpfad = (props) => {
    const {
        title = 'Missing Title',
        referencepic,
        inhalt,
        indexOfAteliers
      } = props.themenpfad
    
        return (
          <Layout>
          <Head>
            <title>Themenpfad | {title}</title>
          </Head>
          <div>
            <h2 className="mb-2">{title}</h2>
{/* REFERENCEPIC */}
            {
              referencepic && 
                <img
                  className="mb-2"
                  src={urlFor(referencepic)
                    .width(2000)
                    .height(1600)
                    .format('webp')
                    .url()
                  }
                  srcSet={
                    `${urlFor(referencepic)
                      .width(1024)
                    .height(819)
                    .format('webp')
                    .url()} 1024w, ${urlFor(referencepic)
                      .width(2000)
                      .height(1600)
                      .format('webp')
                      .url()} 2000w,`
                    }
                    sizes="(max-width:1024px) 100vw, 50vw"
                    alt={`Referenzbild zu $ {title}`}
                    className="mb-1"
                />              
            }

{/* INHALT */}
            { inhalt && <Inhalt inhalt={inhalt}/> }
{/* ATELIERS */}
            { indexOfAteliers && <Ateliers ateliers={indexOfAteliers}/> }
            
          </div>
          </Layout>
        )
}


const query = groq `
  *[_type == "themenpfad"&& content.slug.current == $slug][0].content{
    title,
    referencepic,
    'inhalt': content,
    'indexOfAteliers': ateliers[]->content{titel, referencepic, excerpt, slug}
  }
`

export async function getStaticProps({params}) {
  const themenpfad = await client.fetch(query, {
    slug: params.slug,
  })

  return {
    props: {
      themenpfad,
    },
  }
}

export async function getStaticPaths() {
  const paths = await client.fetch(
      groq`*[_type == "themenpfad" && defined(content.slug.current)][].content.slug.current`
    )
    return {
      paths: paths.map((slug) => ({params: {'slug': slug}})),
      fallback: false,
    }
}


// Themenpfad.getInitialProps = async function(context) {
//     // It's important to default the slug so that it doesn't return "undefined"
//     const { slug = "" } = context.query
//     return await client.fetch(query, { slug })
//   }

export default Themenpfad