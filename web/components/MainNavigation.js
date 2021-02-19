import { useMediaQuery } from 'lib/useMediaQuery'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function MainNavigation() {
  let isDesktop = useMediaQuery('(min-width: 1440px)')

  return <>{isDesktop ? <DesktopNav /> : <MobileNav />}</>
}
