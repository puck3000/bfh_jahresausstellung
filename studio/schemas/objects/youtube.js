import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import { ImYoutube2 } from 'react-icons/im'

const Preview = ({ value }) => {
  const { url } = value
  const id = getYouTubeId(url)
  return <YouTube videoId={id} />
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  icon: ImYoutube2,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternativer Text',
      description: 'Wichtig für SEO und Accessiblity.',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: Preview,
  },
}
