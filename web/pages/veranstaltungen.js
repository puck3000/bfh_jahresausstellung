import groq from 'groq'
import client from 'client'
import Head from 'next/head'
import Layout from 'components/Layout'
import Inhalt from 'components/Inhalt'

const Veranstaltungen = (props) => {
  const { title = 'Missing Title', inhalt } = props.veranstaltungen

  return (
    <Layout>
      <Head>
        <title>{title} | BFH</title>
      </Head>
      <div>
        <h2 className='anker first mb-1 lg:mb-2'>Begrüssung</h2>
        {/* INHALT */}
        {inhalt && <Inhalt inhalt={inhalt} />}
      </div>
    </Layout>
  )
}

const query = groq`
    *[_type == 'veranstaltungen'][0]{
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
  const veranstaltungen = await client.fetch(query)
  return {
    props: {
      veranstaltungen,
    },
    revalidate: 1,
  }
}

export default Veranstaltungen
