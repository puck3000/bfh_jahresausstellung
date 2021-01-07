import groq from 'groq'
import client from 'client'
// import BlockContent from '@sanity/block-content-to-react' 
// import imageUrlBuilder from '@sanity/image-url'

const Home = (props) => {
  const {
    title = 'Missing Title'
  } = props
    return (
      <div>
        <p>The Title of this page is {title}</p>
      </div>
    )
}

const query = groq `*[_type == 'home'][0]{title}`

Home.getInitialProps = async function(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}



export default Home;