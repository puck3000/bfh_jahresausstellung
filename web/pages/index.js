import groq from 'groq'
import client from 'client'
import Layout from 'components/Layout'
import SanityMuxPlayer from 'sanity-mux-player'
import Head from 'next/head'
import MainNavigation from 'components/MainNavigation'

const Home = (props) => {
  const { videodoc } = props.home
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        {/* Todo: pull SEO meta content from CMS */}
        <meta
          name='description'
          content='Neue Räume. Stadt und Land in Huttwil. BFH Jahresausstellung 2021'
        />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/BFH.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta
          name='og:title'
          content='Neue Räume. Stadt und Land in Huttwil. BFH Jahresausstellung 2021'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <div className='home'>
        <div
          className='m-1 lg:m-4 grid grid-rows-bottomFooter '
          id='baseWrapper'
        >
          <header className='fixed left-0 right-0 z-30 2xl:top-0 2xl:left-0 2xl:w-full'>
            <MainNavigation />
          </header>
          <main className='pt-four 2xl:pt-tooBig z-20'>
            <h1 className='base mb-8 text-white text-big lg:text-big-dt'>
              Neue Räume.
              <br />
              Stadt und Land in Huttwil.
            </h1>
          </main>
          {videodoc && (
            <div className='fullscreenVideo '>
              {/* <SanityMuxPlayer
                assetDocument={videodoc}
                autoload={true}
                autoplay={false}
                showControls={true}
              /> */}
              <ReactPlayer
                url={`https://stream.mux.com/${videodoc.data.playback_ids.id}.m3u8`}
              />
            </div>
          )}
        </div>
      </div>
      <style jsx global>{`
        body {
          background-color: black;
        }
      `}</style>
    </>
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
