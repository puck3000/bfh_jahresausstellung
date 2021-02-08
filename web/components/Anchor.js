export default function Anchor({ anchor }) {
  return (
    <div key={anchor._key} className='anker mb-1 lg:mb-2'>
      {anchor.anchorTag}
    </div>
  )
}
