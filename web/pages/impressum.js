import groq from 'groq'
import client from 'client'
import Head from 'next/head'
import Layout from 'components/Layout'
import Inhalt from 'components/Inhalt'

const Impressum = (props) => {
  const { title = 'Missing Title', inhalt } = props

  return (
    <Layout>
      <Head>
        <title>{title} | BFH</title>
      </Head>
      <div>
        <h2 className='anker first mb-1 lg:mb-2'>{title}</h2>
        <hr className='mb-1 lg:mb-2' />

        {/* INHALT */}
        {inhalt && <Inhalt inhalt={inhalt} />}
      </div>
    </Layout>
  )
}

const query = groq`
    *[_type == 'impressum'][0]{'inhalt': content, title}
`

Impressum.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query
  return await client.fetch(query, { slug })
}

export default Impressum
