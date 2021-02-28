import groq from 'groq'
import client from 'client'
import imageUrlBuilder from '@sanity/image-url'
import Head from 'next/head'
import Layout from 'components/Layout'
import Inhalt from 'components/Inhalt'
import Wegweiser from 'components/Wegweiser'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Themenpfad = (props) => {
  const {
    title = 'Missing Title',
    referencepic,
    inhalt,
    indexOfAteliers,
    next,
  } = props.themenpfad

  const destinations = []
  indexOfAteliers.forEach((atelier) => {
    destinations.push({
      icon: 'MdArrowForward',
      url: `/ateliers/${atelier.slug}`,
      label: atelier.titel,
    })
  })

  const nextlink = {
    icon: 'MdDirectionsWalk',
    iconClassNames: 'icon mr-2 lg:justify-self-end',
    url: destinations[0].url,
    label: `Folgen Sie dem Themenpfad ${title}`,
  }
  const destinationToggler = {
    icon: 'MdFlag',
    iconClassNames: 'icon mr-2 lg:justify-self-end',
    label: 'Wählen Sie ein Atelier zum Thema:',
  }

  return (
    <Layout>
      <Head>
        <title>{title} | Themenpfad | BFH Jahresausstellung 2021</title>
      </Head>
      <div>
        <h2 className='anker first mb-1 lg:mb-2'>{title}</h2>
        <hr className='mb-1 lg:mb-2' />

        {/* INHALT */}
        {inhalt && <Inhalt inhalt={inhalt} />}

        {/* WEGWEISER */}
        <Wegweiser
          nextlink={nextlink}
          destinationToggler={destinationToggler}
          destinations={destinations}
        />
      </div>
    </Layout>
  )
}

const query = groq`
  *[_type == "themenpfad"&& content.slug.current == $slug][0].content{
    title,
    referencepic,
    'inhalt': content,
    'next': nextThemenpfad->content{title, 'slug': slug.current},
    'indexOfAteliers': ateliers[]->content{_id, 'slug': slug.current, titel, untertitel, referencepic}
  }
`

export async function getStaticProps({ params }) {
  const themenpfad = await client.fetch(query, {
    slug: params.slug,
  })

  return {
    props: {
      themenpfad,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "themenpfad" && defined(content.slug.current)][].content.slug.current`
  )
  return {
    paths: paths.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export default Themenpfad
