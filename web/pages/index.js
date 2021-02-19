import groq from 'groq'
import client from 'client'
import Layout from 'components/Layout'
import SanityMuxPlayer from 'sanity-mux-player'

const Home = (props) => {
  const { videodoc } = props.home
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
      {videodoc && (
        <SanityMuxPlayer
          assetDocument={videodoc}
          autoload={true}
          autoplay={false}
          showControls={true}
        />
      )}
    </Layout>
  )
}

const query = groq`*[_type == 'home' && _id == 'home'][0]{
  'videodoc': muxvideo.video.asset->{...}
}`

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
