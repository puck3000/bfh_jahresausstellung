import getYouTubeID from 'get-youtube-id'
import Hintergrund from 'pages/hintergrund/[slug]'
import YouTube from 'react-youtube'

export default function Youtube({ url }) {
  const id = getYouTubeID(url.url)

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4'>
      <div className='lg:col-start-2 lg:col-span-3 2xl:col-start-2 2xl:col-span-2 '>
        <YouTube
          videoId={id}
          containerClassName={`lg:col-span-3 lg:col-start-2 2xl:col-span-4 2xl:col-start-3 mb-1 lg:mb-2 youtubeContainer`}
        />
      </div>
    </div>
  )
}
