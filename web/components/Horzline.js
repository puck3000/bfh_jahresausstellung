export default function Horzline({ mb }) {
  if (mb.marginBottom.includes('kleiner')) {
    return <hr key={mb._key} className='mb-one' />
  } else {
    return <hr key={mb._key} className='mb-big' />
  }
}
