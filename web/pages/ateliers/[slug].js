import groq from 'groq'
import client from 'client'
import Head from 'next/head'
import Layout from 'components/Layout'
import imageUrlBuilder from '@sanity/image-url'
import Inhalt from 'components/Inhalt'
import ProjekteIndex from 'components/ProjekteIndex'
import Akkordeon from 'components/Akkordeon'
import Wegweiser from 'components/Wegweiser'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Atelier = (props) => {
  const {
    titel = 'Missing Title',
    untertitel,
    team,
    vorgehen,
    standorte,
    themen,
    projekteIndex,
    referencepic,
    themenpfad,
    next,
  } = props.atelier

  const persons = team?.map((person) => {
    const peep = (
      <>
        {person.person}

        <span className='block text-small lg:text-small-dt'>
          {person.personTitle}
        </span>
        {/* <br />
        <br /> */}
      </>
    )
    return peep
  })

  const nextlink = {
    icon: 'MdDirectionsWalk',
    iconClassNames: 'icon mr-2 lg:justify-self-end',
    url: `/ateliers/${next.slug}`,
    label: `Folgen Sie dem Themenpfad ${themenpfad.title} `,
  }
  const destinationToggler = {
    icon: 'MdFlag',
    iconClassNames: 'icon mr-2 lg:justify-self-end',
    label: 'Wählen Sie ein Atelier zum Thema:',
  }

  const destinations = []
  themenpfad?.ateliers?.forEach((atelier) => {
    destinations.push({
      icon: 'MdArrowForward',
      url: `/ateliers/${atelier.slug}`,
      label: atelier.titel,
    })
  })

  return (
    <Layout>
      <Head>
        <title>Atelier | {titel}</title>
      </Head>
      <div className='intro atelier'>
        <h2 className='anker first mb-1 lg:mb-2'>Atelier</h2>
        <hr className='mb-1 lg:mb-2' />
        <div className='lg:grid lg:grid-cols-4 2xl:grid-cols-8'>
          <div className='lg:col-span-1 2xl:col-span-2'>
            <h1 className='mb-1'>{titel}</h1>
            <p className='mb-1 text-small lg:text-small-dt'>{untertitel}</p>
          </div>
          <figure className='mb-1 lg:mb-2 lg:col-start-2 lg:col-span-3 2xl:col-start-3 2xl:col-span-4'>
            <img
              src={urlFor(referencepic).width(2000).height(1600).url()}
              srcSet={`${urlFor(referencepic)
                .width(1024)
                .height(819)
                .format('webp')
                .url()} 1024w, ${urlFor(referencepic)
                .width(2000)
                .height(1600)
                .format('webp')
                .url()} 2000w,`}
              sizes='(max-width:1024px) 100vw, 75vw'
            />
          </figure>
        </div>
        <hr className='mb-1 lg:mb-2'></hr>
        <div className='baseInfos'>
          {/* Team */}
          {team?.length && <Akkordeon content={persons} title='Team' />}
          {/* Themen */}
          {themen?.length && <Akkordeon content={themen} title='Themen' />}
          {/* Standort */}

          {standorte?.length && (
            <Akkordeon content={standorte} title='Standort' />
          )}
        </div>
        {/* Vorgehen */}
        {vorgehen && <Inhalt inhalt={vorgehen} />}
        {/* Projekte  */}
        {projekteIndex && <ProjekteIndex projekte={projekteIndex} />}
        {/* Wegweiser */}
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
  *[_type == "atelier" && content.slug.current == $slug][0].content{
    titel,
      untertitel,
      referencepic,
      standorte,
      team, 
      themen,
    'themenpfad': themenpfad->{_id, 'title': content.title, 'slug': content.slug.current, 'ateliers': content.ateliers[]->{'titel': content.titel, 'slug': content.slug.current}},
    'next': nextAtelier->content{titel, 'slug': slug.current},
    // 'indexOfAteliers': *[_type=='atelier' && references(^.themenpfad._ref)].content{titel, 'slug': slug.current},
    'projekteIndex': projekte[]->{_id,content{titel,'slug': slug.current, people, referencepic, gallery,'downloadURL': download.asset->url, 'downloadLABEL': download.label}},
    
    'vorgehen': vorgehen[]{
      _type == 'download' => {
        label,
        'downloadUrl': asset->url
      },
      ...
    }
  }
`

export async function getStaticProps({ params }) {
  const atelier = await client.fetch(query, {
    slug: params.slug,
  })

  return {
    props: {
      atelier,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "atelier" && defined(content.slug.current)][].content.slug.current`
  )
  return {
    paths: paths.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export default Atelier
