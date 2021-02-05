import BlockContent from '@sanity/block-content-to-react'
import client from 'client'

export default function Lauftext({ lauftext }) {
  const laufweite = lauftext.laufweite ? 'kompakt' : 'normal'
  return (
    <div key={lauftext._key} className={`${laufweite} mb-two`}>
      <BlockContent blocks={lauftext.inhalt} {...client.config()} />
    </div>
  )
}
