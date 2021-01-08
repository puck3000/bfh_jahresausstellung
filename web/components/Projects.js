import client from 'client'
import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'


function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

const peopleMap = (people) => {
    const peepmap = people.map((person) => (<p>{person}</p>) )
    return peepmap
}
 
export default function Projects({projects}) {
    const projs = projects.map((project) => (
        <Link className="project mb-2" href={`/projekt/${project.slug.current}`}>
        <div>
            <h3>{project.titel}</h3>
            <img
                src={urlFor(project.referencepic)
                .url()}
            />
            {project.people && peopleMap(project.people)} 
        </div>
        </Link>
        

    ))
    return projs
}
