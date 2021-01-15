import Anchor from './Anchor'
import Gallery from "./Gallery";
import Lauftext from "./Lauftext";
import Linkedpic from "./Linkedpic";
import TextAndImage from "./TextAndImage";
import Horzline from './Horzline'

export default function Inhalt({inhalt}) {
    const inhalte = inhalt.map((content) => {
        switch (content._type) {
            case 'anchor':
                return <Anchor anchor={content} key={content._key}/>
                break;
            case 'lauftext':
                return <Lauftext lauftext={content} key={content._key} />
                break;
            case 'textandimage':
                return <TextAndImage textandimage={content} key={content._key} />
                break;
            case 'linkedpic':
                return <Linkedpic linkedpic={content} key={content._key} />
                break;
            case 'gallery':
                return <Gallery gallery={content} key={content._key} />
                break;
            case 'metatext':
                return <Lauftext lauftext={content} key={content._key} />
                break;
            case 'horzline':
                return <Horzline mb={content} key={content._key} />
                break;
            default:
                break;
        }
    })
    return inhalte
}