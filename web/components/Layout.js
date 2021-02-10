import Head from 'next/head'
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

      {/* "mobile-only" Force Mobile Only view, for Client-Sneak-Peaks */}
      <div className=''>
        {/* Todo: Create Header Component */}
        <div className='m-1 min-h-screen grid grid-rows-bottomFooter '>
          <header className='fixed z-50 2xl:top-0 2xl:left-0 2xl:w-full'>
            <MainNavigation />
          </header>
          <main className='pt-12 2xl:pt-28'>{children}</main>
          <FooterComponent />
        </div>
      </div>
    </>
  )
}
