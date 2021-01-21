import Head from 'next/head'
import Link from 'next/link'
import Box from 'components/Box'

export default function Layout({children}) {
    return (
        <>
            <Head>
            <link rel="icon" href="/favicon.ico" />
            {/* Todo: pull SEO meta content from CMS */}
            <meta
                name="description"
                content="Neue Räume. Stadt und Land in Huttwil. BFH Jahresausstellung 2021"
            />
            <meta
                property="og:image"
                content={`https://og-image.now.sh/BFH.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content="Neue Räume. Stadt und Land in Huttwil. BFH Jahresausstellung 2021" />
            <meta name="twitter:card" content="summary_large_image" />
            </Head>

            {/* Force Mobile Only view, for Client-Sneak-Peaks */}
            <div className="mobile-only">
            {/* Todo: Create Header Component */}
                <div className="m-1">
                    <header className="mb-8">
                        <Link href="/">
                            <a className="inline-block mt-1">
                                <Box>Menu</Box>
                            </a>
                        </Link>
                    </header>
                    <main>{children}</main>
                    <footer className="h-6">
                        
                    </footer>
                </div>
            </div>
        </>
    )
}