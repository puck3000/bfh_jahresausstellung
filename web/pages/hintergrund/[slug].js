import groq from 'groq'
import client from '../../client'


const Hintergrund = (props) => {
    const {
        title = 'Missing Title'
      } = props
        return (
          <div>
            <p>The Title of this Hintergrund is {title}</p>
          </div>
        )
}


const query = groq `
    *[_type == "hintergrund" && slug.current == $slug][0]
        {
        title  
        }
`


Hintergrund.getInitialProps = async function(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.query
    const data = await client.fetch(query, { slug })
    return data
  }

export default Hintergrund