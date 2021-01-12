// pages/posts/[slug].js
import ErrorPage from 'next/error'
import {useRouter} from 'next/router'
import {groq} from 'next-sanity'
import {
  getClient,
  usePreviewSubscription,
  urlFor,
  PortableText
  } from '../../lib/sanity'

const query = groq`
  *[_type == "projekt" && content.slug.current == $slug][0].content{
  titel,
  'slug': slug.current
}
`

export default function Projekt({data, preview}) {
  const router = useRouter()
  if (!router.isFallback && !data.projekt?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const {data: projekt} = usePreviewSubscription(query, {
    params: {slug: data.projekt.slug},
    initialData: data,
    enabled: preview,
  })

  const {titel} = data.projekt

  return (
    <article>
      <h2>{titel}</h2>
    </article>
  )
}

export async function getStaticProps({params, preview = false}) {
  const projekt = await getClient(preview).fetch(query, {
    slug: params.slug,
  })

  return {
    props: {
      preview,
      data: {projekt},
    },
  }
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "projekt" && defined(content.slug.current)][].content.slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}