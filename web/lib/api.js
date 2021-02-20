import groq from 'groq'
import client from 'client'

// Queries for Map

export async function getStandorteAndProjectsByStId(id) {
  const standortQuery = groq`*[_type == 'standort' && _id == '${id}' ][]{
    _id,
    'projekte': *[_type == 'projekt' && references(^._id)]
  }`
  const data = await client.fetch(standortQuery)
  return data
}

// Queries for VideoPlayer
