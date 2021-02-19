import groq from 'groq'
import client from 'client'
import Layout from 'components/Layout'
import SanityMuxPlayer from 'sanity-mux-player'
import Head from 'next/head'
import MainNavigation from 'components/MainNavigation'
import ReactPlayer from 'react-player/lazy'
import {
  MdArrowForward,
  MdDirectionsWalk,
  MdMap,
  MdPlayArrow,
  MdReplay,
} from 'react-icons/md'
import Link from 'next/link'
import { useState } from 'react'

const Home = (props) => {
  const { videodoc } = props.home

  const [showNextButtons, setShowNextButtons] = useState(false)

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
        <div className='m-1 lg:m-4' id='baseWrapper'>
          <header className='fixed left-0 right-0 z-30 2xl:top-0 2xl:left-0 2xl:w-full'>
            <MainNavigation />
          </header>
          <main className='fixed pt-four 2xl:pt-tooBig z-20 text-white'>
            <h1 className='base mb-8 text-white text-big lg:text-big-dt'>
              Neue Räume.
              <br />
              Stadt und Land in Huttwil.
            </h1>
            <h2 className='mb-two'>Jahresausstellung BFH Architektur 2021</h2>
            {showNextButtons && (
              <ul className='mt-20'>
                <li className='text-left h-16 lg:h-20 cursor-pointer border-white border-2 p-2 mb-2 mr-1'>
                  <Link href='/themenpfade'>
                    <div className='flex'>
                      <MdDirectionsWalk size='2em' />
                      <p className='ml-4 text-left'>
                        Folgen Sie einem Themenpfad
                      </p>
                    </div>
                  </Link>
                </li>
                <li className='text-left h-16 lg:h-20 cursor-pointer border-white border-2 p-2  mb-2 mr-1'>
                  <Link href='/map'>
                    <div className='flex'>
                      <MdMap size='2em' />
                      <p className='ml-4 text-left'>
                        Navigieren Sie auf der Karte
                      </p>
                    </div>
                  </Link>
                </li>
                <li className='text-left h-16 lg:h-20 cursor-pointer border-white border-2 p-2  mb-2 mr-1'>
                  <button onClick={() => setShowNextButtons(false)}>
                    <div className='flex'>
                      <MdReplay size='2em' />
                      <p className='ml-4 text-left'>
                        {' '}
                        Sehen Sie sich die Videobotschat noch einmal an
                      </p>
                    </div>
                  </button>
                </li>
              </ul>
            )}
          </main>
          {videodoc && !showNextButtons && (
            <div className='fullscreenVideo '>
              <ReactPlayer
                url={`https://stream.mux.com/${videodoc.playbackId}.m3u8`}
                playing
                controls={true}
                onEnded={() => setShowNextButtons(true)}
                playIcon={
                  <button>
                    <MdPlayArrow color='white' size='10rem' />
                  </button>
                }
                light='../videoStills/Startseite_Daniel_Boermann.jpg'
              />
            </div>
          )}
          <a
            href='https://www.bfh.ch/ahb/de/aktuell/veranstaltungen/vernissage-jaa-2021/'
            target='_blank'
            id='vernissage'
            className='fixed left-4 right-4 border-t-2 border-b-2 border-white text-white py-2 bottom-20 flex'
          >
            <MdArrowForward size='2rem' className='' />
            <article className='ml-4'>
              <h2 className='mb-2'>Vernissage</h2>
              <blockquote className='text-medium lg:text-medium-dt'>
                02.03.2021, 18:00-18:30 Uhr – Online
              </blockquote>
            </article>
          </a>
        </div>
      </div>
      <style jsx global>{`
        body {
          background-color: black;
        }
        // #vernissage {
        //   backdrop-filter: blur(5px);
        // }
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
