import groq from 'groq'
import client from 'client'
import Layout from 'components/Layout'
import Inhalt from 'components/Inhalt'
import Head from 'next/head'
import Wegweiser from 'components/Wegweiser'

const Dencity = (props) => {
  const { title = 'Missing Title', inhalt } = props.dencity

  const nextlink = {
    icon: 'MdDirectionsWalk',
    iconClassNames: 'icon mr-2 lg:justify-self-end',
    url: '/themenpfade',
    label: 'Erkunden Sie die Themenpfade',
  }
  return (
    <Layout>
      <Head>
        <title>{title} | BFH Jahresausstellung 2021</title>
      </Head>
      <div>
        <h1 className='anker first mb-1 lg:mb-2'>{title}</h1>
        <hr className='mb-1 lg:mb-2' />

        {/* INHALT */}
        {inhalt && <Inhalt inhalt={inhalt} />}

        <Wegweiser nextlink={nextlink} />
      </div>
    </Layout>
  )
}

const query = groq`
    *[_type == "hintergrund" && slug.current == 'dencity'][0]
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
  const dencity = await client.fetch(query)

  return {
    props: {
      dencity,
    },
    revalidate: 1,
  }
}

export default Dencity
