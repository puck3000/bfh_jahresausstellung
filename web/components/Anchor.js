export default function Anchor({ anchor }) {
  return (
    <button className='mb-4 px-2 py-1 anchor border border-current'>
      {anchor.anchorTag}
    </button>
  )
}
