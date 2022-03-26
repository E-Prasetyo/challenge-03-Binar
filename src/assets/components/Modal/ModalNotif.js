/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalNotif = ({ show, handleClose, message }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className={message?.class}>
        <span className="text-white">{message?.message}</span>
      </Modal.Header>
    </Modal>
  );
};

export default ModalNotif;
