import { urlFor } from 'lib/sanity'

export default function Team({ team }) {
  const teammitglieder = team.map((teammitglied) => (
    <li key={teammitglied._key}>
      <p>{teammitglied.person}</p>
    </li>
  ))
  return <ul className='text mb-1'>{teammitglieder}</ul>
}
