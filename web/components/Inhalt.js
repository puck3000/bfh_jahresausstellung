import Anchor from './Anchor'
import Gallery from "./Gallery";
import Lauftext from "./Lauftext";
import Linkedpic from "./Linkedpic";
import TextAndImage from "./TextAndImage";

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
            default:
                break;
        }
    }
    
    
    )
    return inhalte
}



// switch (content._type) {
//     case 'anchor':
//         <Anchor anchor={content}/>
//         break;
//     case 'lauftext':
//         <Lauftext lauftext={content} />
//         break;
//     case 'textandimage':
//         <TextAndImage textandimage={content} />
//         break;
//     case 'linkedpic':
//         <Linkedpic linkedpic={content} />
//         break;
//     case 'gallery':
//         <Gallery gallery={content} />
//     default:
//         break;
// }



// { anchor && <Anchor anchor={anchor} /> }
// { lauftext && <Lauftext lauftext={lauftext} /> }
// { linkedpic && <Linkedpic linkedpic={linkedpic}/> }
// { textandimage && <TextAndImage textandimage={textandimage} /> }
// { gallery && <Gallery gallery={gallery} /> }