import BlockContent from '@sanity/block-content-to-react'
import client from 'client'

export default function Lauftext({ lauftext }) {
  const laufweite = lauftext.laufweite ? 'kompakt' : 'normal'

  return (
    <div
      key={lauftext._key}
      className={`lauftext mb-1 lg:mb-2 lg:grid lg:grid-cols-4 2xl:grid-cols-8`}
    >
      <article
        className={`${laufweite} lg:col-start-2 2xl:col-start-3 2xl:col-span-4  `}
      >
        <BlockContent blocks={lauftext.inhalt} {...client.config()} />
      </article>
    </div>
  )
}
