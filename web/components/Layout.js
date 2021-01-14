import Head from 'next/head'

export default function Layout({children}) {
    return (
        <>
            <Head>
            <link rel="icon" href="/favicon.ico" />
            {/* Todo: pull SEO meta content from CMS */}
            <meta
                name="description"
                content="BFH Jahresausstellung 2021"
            />
            <meta
                property="og:image"
                content={`https://og-image.now.sh/BFH.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content="BFH Jahresausstellung 2021" />
            <meta name="twitter:card" content="summary_large_image" />
            </Head>
           
           {/* Todo: Create Header Component */}
            <div className="m-1">
                <header className="mb-4">
                    <h1>
                        BFH Jahresausstellung 2021
                    </h1>
                </header>
                <main>{children}</main>
                <footer>Footer</footer>
            </div>
        
        </>
    )
}