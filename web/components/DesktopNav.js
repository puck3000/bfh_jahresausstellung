import ActiveLink from './ActiveLink'

export default function DesktopNav() {
  return (
    <nav className='relative m-1 lg:m-4 grid grid-cols-6'>
      <ul className='col-span-2'>
        <li className='inline-block mr-4'>
          <ActiveLink activeClassName='active' href='/'>
            <a className='inline-block anker first mb-1 lg:mb-2 z-10'>Home</a>
          </ActiveLink>
        </li>
        <li className='inline-block mr-4'>
          <ActiveLink activeClassName='active' href='/hintergrund/huttwil'>
            <a className='inline-block  anker first mb-1 lg:mb-2 z-10'>
              Partnergemeinde
            </a>
          </ActiveLink>
        </li>
        <li className='inline-block mr-4'>
          <ActiveLink activeClassName='active' href='/hintergrund/dencity'>
            <a className='inline-block  anker first mb-1 lg:mb-2  z-10'>
              Dencity
            </a>
          </ActiveLink>
        </li>
        <li className='inline-block mr-4'>
          <ActiveLink activeClassName='active' href='/themenpfade'>
            <a className='inline-block  anker first mb-1 lg:mb-2  z-10'>
              Themenpfade
            </a>
          </ActiveLink>
        </li>
        <li className='inline-block mr-4'>
          <ActiveLink activeClassName='active' href='/projekte'>
            <a className='inline-block  anker first mb-1 lg:mb-2 z-10'>
              Projektübersicht
            </a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  )
}
