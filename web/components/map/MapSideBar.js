import Link from 'next/link'
import client from 'client'
import imageUrlBuilder from '@sanity/image-url'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export default function MapSideBar({ mappoint }) {
  return (
    <aside className='lg:absolute bg-white lg:h-full lg:right-0 lg:top-0'>
      <h2>{mappoint.title}</h2>
      <img
        src={urlFor(mappoint.referencepic).width(2000).height(1600).url()}
        srcSet={`${urlFor(mappoint.referencepic)
          .width(1024)
          .height(819)
          .url()} 1024w, ${urlFor(mappoint.referencepic)
          .width(2000)
          .height(1600)
          .format('webp')
          .url()} 2000w,`}
        sizes='(max-width:1024px) 100vw, 25vw'
        className='mb-1 lg:mb-2 lg:col-span-3 lg:col-start-2 2xl:col-start-3 2xl:col-span-4'
      />
      <Link href={`../themenpfade/${mappoint.slug}`}>
        <p>Zum Themenpfad {mappoint.title}</p>
      </Link>
    </aside>
  )
}
