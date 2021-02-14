import Akkorderer from './Akkorderer'
import AkkContent from './AkkContent'
import AkkHeader from './AkkHeader'
import Inhalt from './Inhalt'
import { iconServer } from 'lib/helpers'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Lauftext from './Lauftext'

const Akkordeon = ({ inhalt, title }) => {
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
      className='w-full cursor-pointer  lg:col-span-3 focus:outline-none'
    >
      <div className='w-full flex flex-row justify-between items-center  lg:grid lg:grid-cols-3  mb-1 lg:mb-2'>
        <h3 className='inline-block text-left lg:mb-0 lg:mr-one lg:order-2 lg:col-span-2 lg:justify-self-start'>
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
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } lg:text-left lg:col-span-4 lg:col-start-1 `}
    >
      <Inhalt inhalt={inhalt}></Inhalt>
    </div>
  )

  const akkkordeon = (
    <motion.div className='mb-1 pr-2 lg:grid lg:grid-cols-4'>
      {akkHeader}
      {akkContent}
    </motion.div>
  )

  return akkkordeon
}

export default Akkordeon
