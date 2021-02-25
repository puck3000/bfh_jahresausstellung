import groq from 'groq'
import client from 'client'
import Head from 'next/head'
import Layout from 'components/Layout'
import Inhalt from 'components/Inhalt'

const Veranstaltungen = (props) => {
  const { title = 'Missing Title', inhalt } = props

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

Veranstaltungen.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query
  return await client.fetch(query, { slug })
}

export default Veranstaltungen
