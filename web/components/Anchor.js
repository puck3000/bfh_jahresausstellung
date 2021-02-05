export default function Anchor({ anchor }) {
  return (
    <div key={anchor._key} className='anker mb-one'>
      {anchor.anchorTag}
    </div>
  )
}
