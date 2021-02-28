import BlockContent from '@sanity/block-content-to-react'
import client from 'client'
import { motion } from 'framer-motion'
import useIntersectionObserver from 'lib/useIntersectionObserver'
import { useRef, useState } from 'react'

export default function Lauftext({ lauftext }) {
  const laufweite = lauftext.laufweite ? 'kompakt' : 'normal'
  const serializers = {
    marks: {
      link: ({ mark, children }) => {
        const { blank, href } = mark
        return blank ? (
          <a href={href} target='_blank' rel='noopener'>
            {children}
          </a>
        ) : (
          <a href={href}>{children}</a>
        )
      },
    },
  }

  const lauftextSection = useRef(null)
  const isVisible = useIntersectionObserver(lauftextSection)

  return (
    <div
      ref={lauftextSection}
      key={lauftext._key}
      className={`lauftext mb-1 lg:mb-2 lg:grid lg:grid-cols-4 2xl:grid-cols-8`}
    >
      {isVisible && (
        <motion.article
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {
              y: 10,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
          className={`${laufweite} lg:col-start-2 2xl:col-start-3 2xl:col-span-4 text `}
        >
          <BlockContent
            blocks={lauftext.inhalt}
            serializers={serializers}
            {...client.config()}
          />
        </motion.article>
      )}
    </div>
  )
}
