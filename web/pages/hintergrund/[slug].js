import groq from 'groq'
import client from 'client'
import Layout from 'components/Layout'
import Inhalt from 'components/Inhalt'
import Head from 'next/head'
import Wegweiser from 'components/Wegweiser'

const Hintergrund = (props) => {
  const { title = 'Missing Title', inhalt } = props.hintergrund

  const nextlink = {
    icon: 'MdDirectionsWalk',
    iconClassNames: 'icon mr-2 lg:justify-self-end',
    url: '/themenpfade',
    label: 'Erkunden Sie die Themenpfade',
  }
  return (
    <Layout>
      <Head>
        <title>{title} | Hintergrund</title>
      </Head>
      <div>
        <h1 className='anker first mb-1 lg:mb-2'>{title}</h1>
        <hr className='mb-1 lg:mb-2' />

        {/* INHALT */}
        {inhalt && <Inhalt inhalt={inhalt} />}

        <Wegweiser
          nextlink={nextlink}
          // destinationToggler={destinationToggler}
          // destinations={destinations}
        />
      </div>
    </Layout>
  )
}

const query = groq`
    *[_type == "hintergrund" && slug.current == $slug][0]
      {
      title,
      'inhalt': content[]{
        _type == 'muxvideo' => {
        'videodoc': video.asset->
        }, 
        _type == 'download' => {
          label,
          'downloadUrl': asset->url
        },
        ...
      }  
    }
`

export async function getStaticProps({ params }) {
  const hintergrund = await client.fetch(query, {
    slug: params.slug,
  })

  return {
    props: {
      hintergrund,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "hintergrund" && defined(slug.current)][].slug.current`
  )
  return {
    paths: paths.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export default Hintergrund
