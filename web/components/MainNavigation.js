import { useMediaQuery } from 'lib/useMediaQuery'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function MainNavigation() {
  let isDesktop = useMediaQuery('(min-width: 1536px)')

  return <>{isDesktop ? <DesktopNav /> : <MobileNav />}</>
}
