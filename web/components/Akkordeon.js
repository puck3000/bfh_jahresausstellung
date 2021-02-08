import { useState } from 'react'
import { motion } from 'framer-motion'

const Akkordeon = ({ content, title }) => {
  const [isOpen, setisOpen] = useState(false)

  const toggleVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  }

  const akkHeader = (
    <button
      onClick={() => {
        setisOpen(!isOpen)
      }}
      className='w-full cursor-pointer flex flex-row justify-between items-center '
    >
      <h3 className='inline-block'>{title}</h3>
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        height='24'
        width='24'
        viewBox='0 0 24 24'
        initial={false}
        animate={isOpen ? 'opened' : 'closed'}
        variants={toggleVariants}
      >
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
      </motion.svg>
    </button>
  )
  const akkContent = (
    <ul className={`${isOpen ? 'visible' : 'hidden'}`}>
      {content.length &&
        content.map((akkItem, idx) => (
          <li key={idx}>
            <p>{akkItem.person}</p>
          </li>
        ))}
    </ul>
  )
  const akkkordeon = (
    <motion.div className='lg:w-1/2 mb-one'>
      {akkHeader}
      {akkContent}
    </motion.div>
  )

  return akkkordeon
}

export default Akkordeon
