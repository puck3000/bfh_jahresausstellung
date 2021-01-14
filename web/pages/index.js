import groq from 'groq'
import client from 'client'
import MainNav from 'components/MainNav'
import Layout from 'components/Layout'

const Home = (props) => {
  const {
    title = 'Missing Title'
  } = props.home
    return (
      <Layout>
        <h1 className="mb-2">{title}</h1>
        <hr className="mb-4"/>
        <p className="mb-8">Hier kommt ab Februar eine coole Map Navigation hin. Bis jetzt aber mal noch dies:</p>
        <MainNav/>
      </Layout>
    )
}

const query = groq `*[_type == 'home'][0]{title}`

// Home.getInitialProps = async function(context) {
//   // It's important to default the slug so that it doesn't return "undefined"
//   const { slug = "" } = context.query
//   return await client.fetch(query, { slug })
// }

export async function getStaticProps({params}) {
  const home = await client.fetch(query)
  return {
    props: {
      home
    }
  }
}

export default Home;