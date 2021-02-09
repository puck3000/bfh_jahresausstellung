import Link from 'next/link'

export default function FooterComponent() {
  return (
    <footer className='mb-two lg:mb-big'>
      <hr className='mt-two lg:mt-big mb-2' />
      <ul className='lg:grid lg:gap-1 lg:grid-cols-8'>
        <li className='mb-2 lg:col-span-2'>
          <p>Ein Projekt der</p>
        </li>
        <li className='mb-2 lg:col-span-4'>
          <p>Sponsoren</p>
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
