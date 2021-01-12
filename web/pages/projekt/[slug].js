import groq from 'groq'
import client from 'client'
import Layout from 'components/Layout'
import Head from 'next/head'
import Gallery from 'components/Gallery'
import Link from 'next/link'


const Project = (props) => {
  const { 
    titel = 'Missing title', 
    people,
    gallery,
  } = props.projekt
    
  return (
    <Layout>
      <Head>
        <title>{titel} | BFH Projekte </title>
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
      <Link href="/projekt/">
        <a>Zurück zur Projektübersicht</a>
      </Link>
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

export async function getStaticProps({params}) {
    const projekt = await client.fetch(query, {
      slug: params.slug,
    })
  
    return {
      props: {
        projekt,
      },
    }
  }


export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "projekt" && defined(content.slug.current)][].content.slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export default Project