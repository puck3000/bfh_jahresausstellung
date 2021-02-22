export default function Download({ download }) {
  return (
    <div className='dl-inhalt mb-1 lg:mb-2'>
      <a className='anker first' href={`${download.downloadUrl}?dl=`}>
        {download.label}
      </a>
    </div>
  )
}
