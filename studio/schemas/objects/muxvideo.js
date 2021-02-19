export default {
  name: 'muxvideo',
  title: 'muxvideo',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
    },
    {
      name: 'video',
      title: 'Video File',
      type: 'mux.video',
    },
  ],
}
