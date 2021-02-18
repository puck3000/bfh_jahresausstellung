import groq from 'groq'
import client from 'client'

// Queries for Map

export async function getStandorteAndProjectsByStId(id) {
  const standortQuery = groq`*[_type == 'standort'][]{
    'projekt': *[_type == 'projekt' && references(^._id)]
  }`
  const data = await client.fetch(standortQuery)
  return data
}

export async function getProjectInfosById(id) {
  const projectQuery = groq`*[_type == "projekt" && _id == '${id}'][]{title, 'inhalt': {'downloadURL': content.download.asset->url, 'downloadLABEL': content.download.label, ...content}, 'standort': content.standort[]->coordinates  }`
  const data = await client.fetch(projectQuery)
  return data
}

export async function getAteliersInfosById(id) {
  const atelierQuery = groq`*[_type == "atelier" && _id == '${id}']{_id, 'title': content.titel, 'slug': content.slug.current, 'referencepic': content.referencepic}`

  const data = await client.fetch(atelierQuery)
  return data
}

export async function getThemenpfadInfosById(id) {
  const themenpfadQuery = groq`*[_type == "themenpfad" && _id == '${id}']{_id, 'title': content.title, 'slug': content.slug.current, 'referencepic': content.referencepic}`

  const data = await client.fetch(themenpfadQuery)
  return data
}
