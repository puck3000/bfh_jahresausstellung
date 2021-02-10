import { useState } from 'react'
import { MdMap } from 'react-icons/md'
import Modal from 'react-modal'

function MapModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true)
  }

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false)
  }

  const onRequestClose = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <button
        className='h-8 focus:outline-none lg:col-start-2 lg:col-span-3 lg:justify-self-start '
        onClick={setModalIsOpenToTrue}
      >
        <p className='hidden lg:inline mr-3 '>
          Themenpfade in der Kartenansicht öffnen:
        </p>
        <MdMap size='2rem' className='inline' />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpenToFalse()}
      >
        <button onClick={setModalIsOpenToFalse}>x</button>
        <h2>Hello Modal</h2>
      </Modal>
    </>
  )
}

export default MapModal
