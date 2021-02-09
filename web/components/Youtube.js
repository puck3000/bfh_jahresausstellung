import getYouTubeID from 'get-youtube-id'
import Hintergrund from 'pages/hintergrund/[slug]'
import YouTube from 'react-youtube'

export default function Youtube({ url }) {
  const id = getYouTubeID(url.url)

  return (
    <div className='youtube mb-1 lg:mb-2 lg:grid lg:grid-cols-4 2xl:grid-cols-8'>
      <YouTube
        videoId={id}
        containerClassName={`lg:col-span-3 lg:col-start-2 2xl:col-span-4 2xl:col-start-3 mb-1 lg:mb-2 youtubeContainer`}
      />
    </div>
  )
}
