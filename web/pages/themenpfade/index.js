import groq from 'groq'
import client from 'client'
import Layout from 'components/Layout'
import Head from 'next/head'
import Inhalt from 'components/Inhalt'
import Wegweiser from 'components/Wegweiser'

const ThemenpfadIndex = (props) => {
  const {
    title = 'Missing Title',
    inhalt,
    tpflist: themenpfade,
  } = props.themenpfadIndex

  const nextlink = {
    icon: 'MdArrowForward',
    iconClassNames: 'icon mr-2 lg:justify-self-end',
    url: './themenpfade/zentralitaet',
    label: 'Folgen Sie mir durch die virtuelle Ausstellung',
  }
  const destinationToggler = {
    icon: 'MdDirectionsWalk',
    iconClassNames: 'icon mr-2 lg:justify-self-end',
    label: 'Wählen Sie einen Themenpfad',
  }

  const destinations = [
    {
      icon: 'MdArrowForward',
      url: './themenpfade/zentralitaet',
      label: 'Themenpfad Zenralität',
    },
    {
      icon: 'MdArrowForward',
      url: './themenpfade/ressourcen',
      label: 'Themenpfad Ressourcen',
    },
    {
      icon: 'MdArrowForward',
      url: './themenpfade/wohnformen',
      label: 'Themenpfad Wohnformen',
    },
  ]

  return (
    <Layout>
      <Head>Themenpfade</Head>
      {/* Themenpfad Übersicht */}
      <div className='anker first mb-1 lg:mb-2'>{title}</div>

      <hr className='mb-1 lg:mb-2' />
      {inhalt && <Inhalt inhalt={inhalt} />}

      <Wegweiser
        nextlink={nextlink}
        destinationToggler={destinationToggler}
        destinations={destinations}
      />
    </Layout>
  )
}

const query = groq`*[_type == 'themenpfadeIndex'][1]{title, 'inhalt': content, 'tpflist': tpflist[]->{_id, 'slug': content.slug.current, 'inhalt': content }}`

// const getAllThemenpfade = groq `*[_type == 'themenpfad' && !(_id in path('drafts.**'))][]|order(content.title){_id, 'slug': content.slug.current, 'inhalt': content }`

export async function getStaticProps({ params }) {
  const themenpfadIndex = await client.fetch(query)
  // const themenpfade = await client.fetch(getAllThemenpfade)
  return {
    props: {
      themenpfadIndex,
      // themenpfade
    },
    revalidate: 1,
  }
}

export default ThemenpfadIndex
