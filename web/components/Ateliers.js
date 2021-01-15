import client from 'client'
import BlockContent from '@sanity/block-content-to-react' 
import imageUrlBuilder from '@sanity/image-url'
import Slideshow from './Slideshow'
import Link from 'next/link'
import Inhalt from 'components/Inhalt'
import Team from 'components/Team'


function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

export default function Ateliers({ateliers}) {
    const attis = ateliers.map((atelier, index) => (
            <li key={index}>
                <hr className="mb-2"/>
                <h2 className="my-2">{atelier.titel}</h2>
{/* Team */}
                { atelier.team && <Team team={atelier.team}/> }
{/* Vorgehen */}
                { atelier.vorgehen && <Inhalt inhalt={atelier.vorgehen}/> }
{/* Standort */}
                { atelier.standort && <p className="mb-2">{atelier.standort}</p> }
{/* Projekte Slideshow */}
                {
                    atelier.slideshow.slide.length > 0 ? 
                        <Slideshow slides={atelier.slideshow}></Slideshow> 
                        :
                        <figure className="mb-2">
                            <img
                            src={urlFor(atelier.referencepic)
                                .width(2000)
                                .height(1600)
                                .format('webp')
                                .url()}
                            srcSet={
                                `${urlFor(atelier.referencepic)
                                .width(1024)
                                .height(819)
                                .format('webp')
                                .url()} 1024w, ${urlFor(atelier.referencepic)
                                    .width(2000)
                                    .height(1600)
                                    .format('webp')
                                    .url()} 2000w,`
                                }
                            sizes="(max-width:1024px) 100vw, 50vw"
                            />   
                            
                        </figure>
                }
                <Link href="/projekte">
                    <a> zu den Projekten</a>
                </Link>
                
            </li>

    ))
    return (
        <ul>
            {
                attis
            }
        </ul>
    )
}