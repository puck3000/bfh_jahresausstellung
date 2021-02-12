import groq from 'groq'
import client from 'client'
import Layout from 'components/Layout'

const Home = (props) => {
  const { title = 'Missing Title' } = props.home
  return (
    <Layout>
      <h1 className='base mb-8'>
        BFH Architektur
        <br />
        Jahresausstellung 2021
        <hr className='my-1' />
        Neue Räume.
        <br />
        Stadt und Land in Huttwil.
      </h1>
      <h2>Veranstaltungen</h2>
    </Layout>
  )
}

const query = groq`*[_type == 'home'][0]{title}`

// Home.getInitialProps = async function(context) {
//   // It's important to default the slug so that it doesn't return "undefined"
//   const { slug = "" } = context.query
//   return await client.fetch(query, { slug })
// }

export async function getStaticProps({ params }) {
  const home = await client.fetch(query)
  return {
    props: {
      home,
    },
    revalidate: 1,
  }
}

export default Home
