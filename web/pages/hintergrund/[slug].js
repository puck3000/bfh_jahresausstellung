import groq from 'groq'
import client from 'client'
import Layout from 'components/Layout'
import Inhalt from 'components/Inhalt'
import Head from 'next/head'


const Hintergrund = (props) => {
    const {
        title = 'Missing Title',
        inhalt
      } = props.hintergrund
    return (
      <Layout>
        <Head>
          <title>{title} | Hintergrund</title>
        </Head>
        <div>
          <h2 className="mb-2">{title}</h2>
{/* INHALT */}
          { inhalt && <Inhalt inhalt={inhalt}/> }
        </div>
      </Layout>
    )
}


const query = groq `
    *[_type == "hintergrund" && slug.current == $slug][0]
        {
        title,
        'inhalt' : content
        }
`



// Hintergrund.getInitialProps = async function(context) {
//     // It's important to default the slug so that it doesn't return "undefined"
//     const { slug = "" } = context.query
//     const data = await client.fetch(query, { slug })
//     return data
//   }


export async function getStaticProps({params}) {
  const hintergrund = await client.fetch(query, {
    slug: params.slug,
  })

  return {
    props: {
      hintergrund,
    },
  }
}

export async function getStaticPaths() {
  const paths = await client.fetch(
      groq`*[_type == "hintergrund" && defined(slug.current)][].slug.current`
    )
    return {
      paths: paths.map((slug) => ({params: {'slug': slug}})),
      fallback: false,
    }
}

export default Hintergrund