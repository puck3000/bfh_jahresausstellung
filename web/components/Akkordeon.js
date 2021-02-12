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
      className='w-full cursor-pointer  lg:col-span-2 focus:outline-none'
    >
      <div className='w-full flex flex-row justify-between items-center  lg:grid lg:grid-cols-2'>
        <h3 className='inline-block lg:mr-one lg:order-2 lg:justify-self-start'>
          {title}
        </h3>
        <div className='lg:order-1 lg:justify-self-end lg:mr-4 '>
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
        </div>
      </div>
    </button>
  )
  const akkContent = (
    <ul
      className={`${
        isOpen ? 'block' : 'hidden'
      } my-two lg:col-span-3 lg:col-start-2`}
    >
      {content.length &&
        content.map((akkItem, idx) => (
          <li key={idx}>
            <p>{akkItem}</p>
          </li>
        ))}
    </ul>
  )
  const akkkordeon = (
    <motion.div className='mb-1 pr-2 lg:grid lg:grid-cols-4'>
      {akkHeader}
      {akkContent}
      <hr className='lg:col-span-4'></hr>
    </motion.div>
  )

  return akkkordeon
}

export default Akkordeon
