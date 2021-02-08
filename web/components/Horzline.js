export default function Horzline({ mb }) {
  if (mb.marginBottom.includes('kleiner')) {
    return <hr key={mb._key} className='mb-1 lg:mb-2' />
  } else {
    return <hr key={mb._key} className='mb-two lg:mb-big' />
  }
}
