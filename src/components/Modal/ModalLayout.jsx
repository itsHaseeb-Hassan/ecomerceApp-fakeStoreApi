import React from 'react'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
const ModalLayout = ({ isOpen, onClose, data }) => {
  const customStyles = {
    modal: {
      maxWidth: '1200px', 
      overflow:'hidden',
    },
  };
  return (
    <Modal open={isOpen} onClose={onClose} styles={customStyles}  >
      {data}
  </Modal>
  )
}

export default ModalLayout