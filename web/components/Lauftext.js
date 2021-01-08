import BlockContent from '@sanity/block-content-to-react' 
import client from 'client'


export default function Lauftext({lauftext}) {
    return (    
        <BlockContent 
            blocks={lauftext.inhalt}
            {...client.config()}
        />
              
    )
}