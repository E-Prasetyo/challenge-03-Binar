/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import imgCar from '../../img/img-BeepBeep.png';
import { serviceDeleteCar } from '../../../service/serviceCar';

function ModalDelete({ show, handleClose, idDelete }) {
  const navigate = useNavigate();
  const handleSave = () => {
    handleClose();
    if (serviceDeleteCar(idDelete)) {
      setTimeout(() => {
        navigate('/car?delete=true');
      }, 1000);
    }
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
        <img className="" src={imgCar} alt="imgCar" />
        <Modal.Title><b>Menghapus Data Mobil</b></Modal.Title>
        <div className="text-center mx-5">Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</div>
      </Modal.Body>
      <div className="d-flex flex-row justify-content-center gap-3 py-4">
        <Button variant="primary" onClick={handleSave}>
          Ya
        </Button>
        <Button variant="outline-primary" onClick={handleClose}>
          Tidak
        </Button>
      </div>
    </Modal>
  );
}

export default ModalDelete;
