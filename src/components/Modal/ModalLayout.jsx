import React from 'react'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
const ModalLayout = ({ isOpen, onClose, data }) => {

  return (
    <Modal open={isOpen} onClose={onClose}   >
      {data}
  </Modal>
  )
}

export default ModalLayout