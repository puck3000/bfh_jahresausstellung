export default function Download({ download }) {
  return (
    <div className='dl-inhalt'>
      <a className='anker first' href={`${download.downloadUrl}?dl=`}>
        {download.label}
      </a>
    </div>
  )
}
