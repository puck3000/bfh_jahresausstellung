import client, { previewClient } from './sanity'

export async function getAllProjectsWithSlug() {
    const data = await client.fetch(`*[_type == "projekt"]{ 'slug': content.slug.current }`)
    return data
  }