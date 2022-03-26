/* eslint-disable prefer-const */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
// import { Car as data } from '../../assets/data/data';
import { serviceGetCar } from '../../service/serviceCar';
import ModalNotif from '../../assets/components/Modal/ModalNotif';
import ListCar from './ListCar';

const Car = () => {
  const navigate = useNavigate();
  const data = serviceGetCar();
  const [searchParams, setSearchParams] = useSearchParams();
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [message, setMessage] = useState('');
  const handleAdd = () => {
    return navigate('/car/add');
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShowDelete = () => {
    setShowDelete(true);
  };
  const handleCloseDelete = () => {
    setShowDelete(false);
  };
  const handleEdit = () => {
    console.log('edit');
    return navigate('/car/edit');
  };
  useEffect(() => {
    if (searchParams.get('save') === 'true') {
      setMessage({ message: 'Data Berhasil Ditambahkan', class: 'bg-success' });
      handleShow();
      setTimeout(() => {
        handleClose();
        setSearchParams({});
      }, 1500);
    }
    if (searchParams.get('delete') === 'true') {
      setMessage({ message: 'Data Berhasil Dihapus', class: 'bg-dark' });
      handleShow();
      console.log('delete');
      setTimeout(() => {
        handleClose();
        setSearchParams({});
      }, 1500);
    }
  }, [searchParams.get('save'), searchParams.get('delete'), data]);

  return (
    <div className="container-fluid bg-light px-0">
      <div className="ps-4 pt-3">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item fw-bold active">Car</li>
            <li className="breadcrumb-item active">List Car</li>
          </ol>
        </nav>
      </div>
      <div className="m-4">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h5 className="fw-bold text-center">List Car</h5>
          <button
            type="button"
            className="btn btn-primary btn-sm fw-bold"
            onClick={handleAdd}
          >
            + Add New Car
          </button>
        </div>
        <div className="my-3">
          <ul className="nav nav-pills nav-fill gap-2">
            <li className="nav-item-sm">
              <a className="nav-link active border text-primary bg-white" href="#">All</a>
            </li>
            <li className="nav-item-sm">
              <a className="nav-link border text-secondary bg-white" href="#">Small</a>
            </li>
            <li className="nav-item-sm">
              <a className="nav-link border text-secondary bg-white" href="#">Medium</a>
            </li>
            <li className="nav-item-sm">
              <a className="nav-link border text-secondary bg-white" href="#" tabIndex="-1">Large</a>
            </li>
          </ul>
        </div>
        <ListCar
          data={data}
          handleEdit={handleEdit}
          showDelete={showDelete}
          handleCloseDelete={handleCloseDelete}
          handleShowDelete={handleShowDelete}
        />
      </div>
      <ModalNotif show={show} handleClose={handleClose} message={message} />
    </div>
  );
};

export default Car;
