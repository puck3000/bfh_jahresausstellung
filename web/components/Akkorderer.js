import { cloneElement, createContext, useContext, useState } from 'react'
import { motion } from 'framer-motion'

const AkkordeonContext = createContext()

export const AkkHeader = ({ children }) => {
  const [isOpen, setIsOpen] = useContext(AkkordeonContext)
  return (
    <>
      {cloneElement(children, {
        onClick: () => {
          setIsOpen(!isOpen)
        },
      })}
    </>
  )
}

export const AkkContent = ({ children }) => {
  const [isOpen] = useContext(AkkordeonContext)
  const content = isOpen ? <> {children} </> : <></>
  return content
}

export default function Akkorderer({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  }

  return (
    <AkkordeonContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </AkkordeonContext.Provider>
  )
}
