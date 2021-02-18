import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useState,
} from 'react'
import { motion } from 'framer-motion'

const AkkordeonContext = createContext()

export const AkkHeader = ({ children }) => {
  const [isOpen, setIsOpen] = useContext(AkkordeonContext)
  const child = Children.only(children)
  const childClassName = child.props.className || ''
  return (
    <>
      {cloneElement(children, {
        onClick: () => {
          setIsOpen(!isOpen)
        },
        className:
          `${childClassName} ${isOpen ? 'isOpened' : 'isClosed'}` || null,
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
