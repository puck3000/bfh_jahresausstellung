import Head from 'next/head'
import BackToTop from './BackToTop'
import FooterComponent from './FooterComponent'
import MainNavigation from './MainNavigation'

export default function Layout({ children }) {
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

      <div className=''>
        <div className='m-1 lg:m-4 min-h-screen grid grid-rows-bottomFooter '>
          <header className='fixed left-0 right-0 z-30 2xl:top-0 2xl:left-0 2xl:w-full'>
            <MainNavigation />
          </header>
          <main className='pt-four 2xl:pt-tooBig'>{children}</main>
          <BackToTop />
          <FooterComponent />
        </div>
      </div>
    </>
  )
}
