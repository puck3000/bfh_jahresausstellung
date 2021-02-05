import { urlFor } from 'lib/sanity'

export default function Team({ team }) {
  const teammitglieder = team.map((teammitglied) => (
    <li>
      {/* <img
        src={urlFor(teammitglied.avatar)
          .width(2000)
          .height(1600)
          .format('webp')
          .url()}
        srcSet={`${urlFor(teammitglied.avatar)
          .width(1024)
          .height(819)
          .format('webp')
          .url()} 1024w, ${urlFor(teammitglied.avatar)
          .width(2000)
          .height(1600)
          .format('webp')
          .url()} 2000w,`}
        sizes='(max-width:1024px) 100vw, 50vw'
        alt={`Portrait von ${teammitglied.person}`}
      /> */}
      <p>{teammitglied.person}</p>
    </li>
  ))
  return <ul className='text mb-one'>{teammitglieder}</ul>
}
