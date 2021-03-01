import ReactPlayer from 'react-player'

export default function MuxVideo({ video }) {
  const id = video.videodoc.playbackId

  return (
    <div className='lg:grid lg:grid-cols-4 mb-4'>
      <div className='lg:col-start-2 lg:col-span-3 2xl:col-start-2 2xl:col-span-2 mb-4 block'>
        <ReactPlayer
          url={`https://stream.mux.com/${id}.m3u8`}
          width='100%'
          height='100%'
          controls={true}
        />
        <p className='text-small lg:text-small-dt mt-1 lg:mt-2 block'>
          {video.title}
        </p>
      </div>
    </div>
  )
}
