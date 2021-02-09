import Link from 'next/link'
import Image from 'next/image'

export default function FooterComponent() {
  return (
    <footer className='mb-two lg:mb-big'>
      <hr className='mt-two lg:mt-big mb-2' />
      <ul className='lg:grid lg:gap-1 lg:grid-cols-8'>
        <li className='mb-2 lg:col-span-2'>
          <p className='mb-1 lg:mb-2'>Ein Projekt der</p>
          {/* <Link href='/'>
            <Image
              src='/logos/logo_hkb_footer_100px.svg'
              alt='Logo BFH'
              width={100}
              height={100}
            />
          </Link> */}
        </li>
        <li className='mb-2 lg:col-span-4'>
          <p className='mb-1 lg:mb-2'>Sponsoren</p>
          {/* <ul className='grid grid-cols-2 lg:grid-cols-5'>
            <li className='cursor-pointer'>
              <Link href='/'>
                <Image
                  src='/logos/1_HERZOG_footer_65px.svg'
                  alt='Logo Herzog'
                  width={65}
                  height={65}
                />
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/'>
                <Image
                  src='/logos/1_LoMarazzi_footer_65px.svg'
                  alt='Logo Herzog'
                  width={76}
                  height={65}
                />
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/'>
                <Image
                  src='/logos/1_Hutwil_footer_65px.png'
                  alt='Logo Huttwil'
                  width={65}
                  height={65}
                />
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/'>
                <Image
                  src='/logos/1_SIA_footer_65px.png'
                  alt='Logo SIA'
                  width={65}
                  height={65}
                />
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/'>
                <Image
                  src='/logos/1_Kornhausforum_footer_65px.svg'
                  alt='Logo Kornhausforum'
                  width={65}
                  height={65}
                />
              </Link>
            </li>
          </ul> */}
        </li>
        <li className='mb-2 lg:col-span-1'>
          <Link href='/impressum'>Impressum</Link>
        </li>
        <li className='mb-2 lg:col-span-1'>
          <Link href='/kontakt'>Kontakt</Link>
        </li>
      </ul>
    </footer>
  )
}
