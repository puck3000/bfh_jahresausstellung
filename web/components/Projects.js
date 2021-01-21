import client from 'client'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const peopleMap = (people) => {
  const peepmap = people.map((person) => <p>{person}</p>)
  return peepmap
}

export default function Projects({ projects }) {
  return projects.map((project) => (
    <Link className='project mb-2' href={`/projekt/${project.slug.current}`}>
      <div>
        <h2>{project.titel}</h2>
        <img
          src={urlFor(project.referencepic)
            .width(2000)
            .height(1600)
            .format('webp')
            .url()}
          srcSet={`${urlFor(project.referencepic)
            .width(1024)
            .height(819)
            .format('webp')
            .url()} 1024w, ${urlFor(project.referencepic)
            .width(2000)
            .height(1600)
            .format('webp')
            .url()} 2000w,`}
          sizes='(max-width:1024px) 100vw, 50vw'
        />

        {project.people && (
          <ul>
            {project.people.map((person) => (
              <li key={person._id}>{person}</li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  ))
}
