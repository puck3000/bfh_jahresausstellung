export default function Abstand({ mb }) {
  if (mb.marginBottom.includes('kleiner')) {
    return (
      <div key={mb._key} className='mb-1 lg:mb-2'>
        &nbsp;
      </div>
    )
  } else {
    return (
      <div key={mb._key} className='mb-two lg:mb-big'>
        &nbsp;
      </div>
    )
  }
}
