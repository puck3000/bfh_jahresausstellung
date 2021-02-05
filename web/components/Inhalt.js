import Anchor from './Anchor'
import Gallery from './Gallery'
import Lauftext from './Lauftext'
import Linkedpic from './Linkedpic'
import TextAndImage from './TextAndImage'
import Horzline from './Horzline'
import Slideshow from './Slideshow'

export default function Inhalt({ inhalt }) {
  const inhalte = inhalt.map((content) => {
    switch (content._type) {
      case 'anchor':
        return <Anchor anchor={content} />
        break
      case 'lauftext':
        return <Lauftext lauftext={content} />
        break
      case 'textandimage':
        return <TextAndImage textandimage={content} />
        break
      case 'linkedpic':
        return <Linkedpic linkedpic={content} />
        break
      case 'gallery':
        return <Gallery gallery={content} />
        break
      case 'metatext':
        return <Lauftext lauftext={content} />
        break
      case 'horzline':
        return <Horzline mb={content} key={content._key} />
        break
      default:
        break
    }
  })
  return <section className='inhalt'>{inhalte}</section>
}
