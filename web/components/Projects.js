import client from 'client'
import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'


function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

export default function Projects({projects}) {
    const projs = projects.map((project) => (
        <Link className="project mb-2" href={`/project/${project.slug.current}`}>
        <div>
            <h3>{project.titel}</h3>
            <img
                src={urlFor(project.referencepic)
                .url()}
            /> 
        </div>
        </Link>
        

    ))
    return projs
}
