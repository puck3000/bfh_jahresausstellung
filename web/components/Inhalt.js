import Anchor from './Anchor'
import Gallery from './Gallery'
import Lauftext from './Lauftext'
import Linkedpic from './Linkedpic'
import TextAndImage from './TextAndImage'
import Horzline from './Horzline'
import Youtube from './Youtube'
import InhaltAkkordeon from './InhaltAkkordeon'
import Metatext from './Metatext'
import NewGallery from './NewGallery'
import MuxVideo from './MuxVideo'
import Abstand from './Abstand'
import Download from './Download'
import LazyGal from './LazyGal'

export default function Inhalt({ inhalt }) {
  const inhalte = inhalt.map((content) => {
    switch (content._type) {
      case 'anchor':
        return <Anchor anchor={content} key={content._key} />
        break
      case 'lauftext':
        return <Lauftext lauftext={content} key={content._key} />
        break
      case 'textandimage':
        return <TextAndImage textandimage={content} key={content._key} />
        break
      case 'linkedpic':
        return <Linkedpic linkedpic={content} key={content._key} />
        break
      case 'gallery':
        return <Gallery gallery={content} key={content._key} />
        // return <Gallery gallery={content} key={content._key} />
        break
      case 'metatext':
        return <Metatext lauftext={content} key={content._key} />
        break
      case 'horzline':
        return <Horzline mb={content} key={content._key} />
        break
      case 'abstand':
        return <Abstand mb={content} key={content._key} />
        break
      case 'youtube':
        return <Youtube url={content} key={content._key} />
        break
      case 'muxvideo':
        return <MuxVideo video={content} key={content._key} />
        break
      case 'download':
        return <Download download={content} key={content._key} />
        break
      case 'akkordeon':
        return (
          <InhaltAkkordeon
            inhalt={content.akkContent}
            title={content.title}
            key={content._key}
          />
        )
        break
      default:
        break
    }
  })
  return <section className='inhalt'>{inhalte}</section>
}
