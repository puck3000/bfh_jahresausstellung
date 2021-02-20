export default function Download({ download }) {
  return (
    <div className='dl-inhalt'>
      <a className='anker first' href={download.downloadUrl}>
        {download.label}
      </a>
    </div>
  )
}
