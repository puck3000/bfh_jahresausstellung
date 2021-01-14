import client from 'client'
import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

export default function ProjIndexView({projekt}) {
    return (
        <>
            <hr></hr>
            <h2 className="mt-1 mb-2">{projekt.titel}</h2>
            <img 
                src={urlFor(projekt.referencepic)}
                alt={`Referenzbild zu ${projekt.titel}`}
                className="mb-1"
            />
            { projekt.people && (
                <ul className="mb-4">
                {
                    projekt.people?.map((person, i) => (
                    <li key={i}>{person}</li>
                    ))
                }
                </ul>
            )}
        </>
    )
}


//   <Link key={projekt._id} href="/projekte/[slug]" as={`/projekte/${projekt.slug}`} passHref>
//     <a className={`link projekt ${projekt.slug}`}>
//       <hr></hr>
//       <h2 className="mt-1 mb-2">{projekt.titel}</h2>
//       <img 
//         src={urlFor(projekt.referencepic)}
//         alt={`Referenzbild zu ${projekt.titel}`}
//         className="mb-1"
//       />
//       { projekt.people && (
//         <ul className="mb-4">
//           {
//             projekt.people?.map((person, i) => (
//               <li key={i}>{person}</li>
//             ))
//           }
//         </ul>
//       ) 
//       }
//     </a>
//   </Link>
