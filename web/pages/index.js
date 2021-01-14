import groq from 'groq'
import client from 'client'
import MainNav from 'components/MainNav'
import Layout from 'components/Layout'

const Home = (props) => {
  const {
    title = 'Missing Title'
  } = props
    return (
      <Layout>
        <h1>Welcome to the homepage</h1>
        <hr/>
        <MainNav/>
      </Layout>
    )
}

const query = groq `*[_type == 'home'][0]{title}`

Home.getInitialProps = async function(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}



export default Home;