import groq from 'groq'
import client from 'client'
const { default: Layout } = require("components/Layout")
const { default: Head } = require("next/head")
import imageUrlBuilder from '@sanity/image-url'
import Inhalt from 'components/Inhalt'
import Projects from 'components/Projects'


function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

const Atelier = (props) => {
    const {
        titel = 'Missing Title',
        referencepic,
        inhalt,
        indexOfProjects

    } = props
    return (

        <Layout>
            <Head>
                <title>Ateliers | {titel} </title>
            </Head>
            <div>
            <h2 className="mb-2">{titel}</h2>
{/* REFERENCEPIC */}
            {
              referencepic && 
                <img
                  className="mb-2"
                  src={urlFor(referencepic)
                  .url()}
                />              
            }

{/* INHALT */}
            { inhalt && <Inhalt inhalt={inhalt}/> }
{/* PPROJECTS */}

            { indexOfProjects && <Projects projects={indexOfProjects}/> }
            
          </div>

        </Layout>

    )
}

const query = groq `
  *[_type == "atelier"&& content.slug.current == $slug][0].content{
    titel,
    referencepic,
    'inhalt': content,
    'indexOfProjects': projects[]->content{titel, referencepic, people, slug}
  }
`


Atelier.getInitialProps = async function(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.query
    return await client.fetch(query, { slug })
  }

export default Atelier