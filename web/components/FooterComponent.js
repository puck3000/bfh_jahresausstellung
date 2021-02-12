import Link from 'next/link'
import Image from 'next/image'

export default function FooterComponent() {
  return (
    <footer className=''>
      <hr className='mt-two lg:mt-big mb-2' />
      <ul className='lg:grid lg:gap-1 lg:grid-cols-8'>
        <li className='mb-2 lg:col-span-2'>
          <p className='mb-1  lg:mb-2 text-small lg:text-small-dt'>
            Ein Projekt der
          </p>
          <Link href='/'>
            <img
              src='/logos/logo_hkb_footer_100px.svg'
              alt='Logo BFH'
              className='h-24'
            />
          </Link>
        </li>
        <li className='mb-2 lg:col-span-4 lg:flex lg:flex-col lg:justify-between'>
          <p className='mb-4 mt-one lg:mt-0 text-small lg:text-small-dt  '>
            Sponsoren
          </p>
          <ul className='lg:flex lg:flex-row '>
            <li className='cursor-pointer mb-4 lg:mb-0 lg:mr-4'>
              <Link href='/'>
                <img
                  src='/logos/1_HERZOG_footer_65px.svg'
                  alt='Logo Herzog'
                  className='h-16'
                />
              </Link>
            </li>
            <li className='cursor-pointer  mb-4 lg:mb-0 lg:mr-4 '>
              <Link href='/'>
                <img
                  src='/logos/1_LoMarazzi_footer_65px.svg'
                  alt='Logo Herzog'
                  className='h-16'
                />
              </Link>
            </li>
            <li className='cursor-pointer  mb-4 lg:mb-0 lg:mr-4'>
              <Link href='/'>
                <img
                  src='/logos/1_Hutwil_footer_65px.png'
                  alt='Logo Huttwil'
                  className='h-16'
                />
              </Link>
            </li>
            <li className='cursor-pointer  mb-4 lg:mb-0 lg:mr-4'>
              <Link href='/'>
                <img
                  src='/logos/1_SIA_footer_65px.png'
                  alt='Logo SIA'
                  className='h-16'
                />
              </Link>
            </li>
            <li className='cursor-pointer  mb-4 lg:mb-0 lg:mr-4'>
              <Link href='/'>
                <img
                  src='/logos/1_Kornhausforum_footer_65px.svg'
                  alt='Logo Kornhausforum'
                  className='h-16'
                />
              </Link>
            </li>
          </ul>
        </li>
        <li className='mb-2 lg:col-span-1'>
          <Link href='/impressum'>
            <a className='text-small lg:text-small-dt'>Impressum</a>
          </Link>
        </li>
        <li className='mb-2 lg:col-span-1'>
          <Link href='/kontakt'>
            <a className='text-small lg:text-small-dt'>Kontakt</a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}
