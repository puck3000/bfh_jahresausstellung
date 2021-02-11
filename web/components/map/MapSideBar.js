import Link from 'next/link'
import client from 'client'
import imageUrlBuilder from '@sanity/image-url'
import { MdClose, MdArrowForward } from 'react-icons/md'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export default function MapSideBar({ mappoint, onSidebarToggle }) {
  return (
    <aside className='p-1 mt-two lg:mt-0 lg:p-4 lg:absolute bg-white lg:h-full lg:right-0 lg:top-0'>
      <div className='flex justify-between'>
        <h2>{mappoint.title}</h2>
        <MdClose
          className='h-6 w-6 mb-2 lg:h-8 lg:w-8 lg:mb-4'
          onClick={() => onSidebarToggle(false)}
        />
      </div>
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
        <div className='flex items-center'>
          <MdArrowForward className='h-4 w-4 lg:h-6 lg:w-8' />
          <p className='text-small lg:text-small-dt'>
            zum Themenpfad {mappoint.title}
          </p>
        </div>
      </Link>
    </aside>
  )
}
