export default function Anchor({ anchor }) {
  return (
    <div
      key={anchor._key}
      className='anker mb-1 sticky top-10 lg:top-16 2xl:top-28 lg:mb-2'
    >
      {anchor.anchorTag}
    </div>
  )
}
