import BlockContent from '@sanity/block-content-to-react'
import client from 'client'

export default function Metatext({ lauftext }) {
  const laufweite = lauftext.laufweite ? 'kompakt' : 'normal'
  return (
    <div
      key={lauftext._key}
      className={`lauftext mb-1 lg:mb-2 lg:grid lg:grid-cols-4 2xl:grid-cols-8`}
    >
      <article
        className={`${laufweite} lg:col-start-1 lg:col-span-1 2xl:col-start-1 2xl:col-span-2 `}
      >
        <BlockContent blocks={lauftext.inhalt} {...client.config()} />
      </article>
    </div>
  )
}
