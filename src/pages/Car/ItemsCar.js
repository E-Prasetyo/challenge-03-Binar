/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/style-prop-object */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import imgCar from '../../assets/img/image 1.png';
import keyIcon from '../../assets/img/Vector.png';
import jamIcon from '../../assets/img/fi_clock.png';
import deleteIcon from '../../assets/img/fi_trash-2.png';
import ModalDelete from '../../assets/components/Modal/ModalDelete';

const ItemsCar = ({
  item, handleEdit, handleShowDelete, handleCloseDelete, showDelete,
}) => {
  return (
    <>
      <ModalDelete show={showDelete} handleClose={handleCloseDelete} idDelete={item.id} />
      <div className="card rounded rounded-3" style={{ width: '18rem' }}>
        <img src={imgCar} className="card-img-top" alt="..." />
        <div className="card-body p-2">
          <div className="card-text">
            <div className="ms-1">{item.Car}/{item.type}</div>
            <div className="ms-1"><b>Rp. {item.price} / hari</b></div>
            <div className="ms-1">
              <span><img src={keyIcon} alt="" /></span>
              {' '}
              {item.startRent}{' - '}{item.finishRent}
            </div>
            <div className="ms-1">
              <span><img src={jamIcon} alt="" /></span>
              {' '}
              Update at {item.status}
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between py-2">
            <button className="btn btn-outline-success w-100 mx-2" onClick={handleShowDelete}>
              <span><img src={deleteIcon} alt="" /></span>
              {' '}Delete
            </button>
            <button className="btn btn-success w-100 mx-2" onClick={handleEdit.bind(null, item.id)}>
              <span><img src={deleteIcon} alt="" /></span>
              {' '}Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsCar;
