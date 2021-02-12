import { useEffect, useState } from 'react'
import { MdVerticalAlignTop } from 'react-icons/md'
export default function BackToTop() {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    !showScroll && window.pageYOffset > 400
      ? setShowScroll(true)
      : setShowScroll(false)
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  })

  return (
    <button className={`fixed bottom-4 left-4`} onClick={scrollTop}>
      <MdVerticalAlignTop className='bg-white rounded-full p-2 h-12 w-12 focus:outline-none' />
    </button>
  )
}
