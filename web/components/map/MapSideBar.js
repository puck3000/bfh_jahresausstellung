import Link from 'next/link'
import client from 'client'
import imageUrlBuilder from '@sanity/image-url'
import {
  MdClose,
  MdArrowForward,
  MdFlag,
  MdDirectionsWalk,
} from 'react-icons/md'
import { IoMdPin } from 'react-icons/io'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export default function MapSideBar({ mappoint, onSidebarToggle, layer }) {
  const icon = (layer) => {
    switch (layer) {
      case 'themenpfade':
        return <MdDirectionsWalk className='lg:h-12' size='1.2em' />
        break
      case 'ateliers':
        return <MdFlag />
        break
      case 'projekte':
        return <IoMdPin />
        break
      default:
        break
    }
  }

  return (
    <aside className='p-1 mt-two lg:mt-0 lg:p-4 lg:fixed bg-white lg:h-full lg:right-0 lg:top-0 shadow-left lg:w-1/4 z-40'>
      <div className='flex justify-between'>
        <h2 className='text-small lg:text-small-dt pt-1'>{layer}</h2>
        <MdClose
          className='h-6 w-6 lg:h-12 lg:w-12'
          onClick={() => onSidebarToggle(false)}
        />
      </div>
      <div>
        {icon(layer)}
        <p className='text-small lg:text-small-dt'>
          Kurzer Beschrieb Netur aut eiur, con culla consed quasper ionseri ut
          volest verum volo- rep eritis dus.
        </p>
      </div>
      <h2 className='mt-two lg:mt-big'>{mappoint.title}</h2>
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
      <hr className='mt-2'></hr>
    </aside>
  )
}
