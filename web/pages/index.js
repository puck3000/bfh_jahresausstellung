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
        <title>
          Neue Räume. Stadt und Land in Huttwil. BFH Jahresausstellung 2021
        </title>
      </Head>

      <div className='home'>
        <div className='m-1 lg:m-4 2xl:m-8' id='baseWrapper'>
          <header className='fixed left-0 right-0 z-30 2xl:top-0 2xl:left-0 2xl:w-full'>
            <MainNavigation />
          </header>
          <main className='fixed top-0 bottom-0 left-1 right-1 lg:left-4 lg:right-4 2xl:left-6 2xl:right-6 pt-20 pb-16 flex flex-col z-20 text-white'>
            <h1 className='base mb-2 text-white text-big lg:text-big-dt z-20'>
              Neue Räume
              <br />
              Stadt und Land in Huttwil
            </h1>
            <h2 className='z-20'>Jahresausstellung Architektur 2021</h2>
            <ul
              className='lg:w-1/2 flex flex-col flex-1 justify-center'
              id='nextButtons'
            >
              {showNextButtons && (
                <>
                  <li className='text-left flex items-center h-18 lg:h-20 cursor-pointer border-white border-2 p-2 mb-2'>
                    <Link href='/themenpfade'>
                      <div className='flex items-center'>
                        <MdDirectionsWalk size='2em' />
                        <p className='ml-4 text-left lg:text-medium-dt 2xl:text-big-dt'>
                          Folgen Sie einem Themenpfad
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className='text-left flex items-center h-18 lg:h-20 cursor-pointer border-white border-2 p-2  mb-2'>
                    <Link href='/map'>
                      <div className='flex items-center'>
                        <MdMap size='2em' />
                        <p className='ml-4 text-left lg:text-medium-dt 2xl:text-big-dt'>
                          Navigieren Sie auf der Karte
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className='text-left flex items-center h-18 lg:h-20 cursor-pointer border-white border-2 p-2  mb-2'>
                    <button onClick={() => setShowNextButtons(false)}>
                      <div className='flex items-center'>
                        <MdReplay size='2em' />
                        <p className='ml-4 text-left lg:text-medium-dt 2xl:text-big-dt'>
                          Videobotschat noch einmal ansehen
                        </p>
                      </div>
                    </button>
                  </li>
                </>
              )}
            </ul>
            <a
              rel='noopener'
              href='https://www.bfh.ch/ahb/de/aktuell/veranstaltungen/vernissage-jaa-2021/'
              target='_blank'
              id='vernissage'
              className='border-t-2 border-b-2 border-white text-white py-2 flex z-20'
            >
              <MdArrowForward size='2rem' className='' />
              <article className='ml-4'>
                <h2 className='mb-2'>Vernissage</h2>
                <blockquote className='text-medium lg:text-big-dt'>
                  02.03.2021, 18:00-18:30 Uhr – Online
                </blockquote>
              </article>
            </a>
            {videodoc && !showNextButtons && (
              <div className='fullscreenVideo'>
                <ReactPlayer
                  url={`https://stream.mux.com/${videodoc.playbackId}.m3u8`}
                  playing
                  width='100%'
                  height='100%'
                  controls={true}
                  onEnded={() => setShowNextButtons(true)}
                  playIcon={
                    <button aria-label='play video' className='fixed'>
                      <MdPlayArrow color='white' size='10rem' />
                    </button>
                  }
                  light='../videoStills/Startseite_TEST.gif'
                />
              </div>
            )}
          </main>
        </div>
      </div>
      <style jsx global>{`
        body {
          background-color: black;
        }
        .fullscreenVideo video,
        .fullscreenVideo .react-player__preview {
          object-fit: cover;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
        }
        @media screen and (min-width: 1024px) {
          #nextButtons {
            margin-left: 25%;
          }
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
