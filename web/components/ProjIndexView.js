import client from 'client'
import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

export default function ProjIndexView({projekt}) {
    return (
        <div className="mb-4">
            <hr className="mb-2"></hr>
            <img 
                src={urlFor(projekt.referencepic)}
                alt={`Referenzbild zu ${projekt.titel}`}
                className="mb-2"
            />
            <h2 className="mb-2">{projekt.titel}</h2>
            { projekt.people && (
                <ul className="mb-2">
                {
                    projekt.people?.map((person, i) => (
                    <li key={i}>{person}</li>
                    ))
                }
                </ul>
            )}
            {
            projekt.download && (
              <div className="mb-2">
                <a href={`${projekt.download}?dl=`}>{projekt.download.label}</a>
              </div>
            )
          }
        </div>
    )
}