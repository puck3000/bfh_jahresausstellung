import groq from 'groq'
import client from 'client'
import imageUrlBuilder from '@sanity/image-url'
import Head from 'next/head'
import Layout from 'components/Layout'
import Inhalt from 'components/Inhalt'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Atelier = (props) => {
  const {
    title = 'Missing Title',
    standort,
    team,
    vorgehen,
    slideshow,
  } = props.atelier

  return (
    <Layout>
      <Head>
        <title>Atelier | {title}</title>
      </Head>
    </Layout>
  )
}

const query = groq`
  *[_type == "atelier"&& content.slug.current == $slug][0].content{
    titel,
    referencepic,
    standort,
    team, 
    vorgehen,
    slideshow
  }
`

export async function getStaticProps({ params }) {
  const atelier = await client.fetch(query, {
    slug: params.slug,
  })

  return {
    props: {
      atelier,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "atelier" && defined(content.slug.current)][].content.slug.current`
  )
  return {
    paths: paths.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export default Atelier
