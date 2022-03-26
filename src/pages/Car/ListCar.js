/* eslint-disable array-callback-return */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import ItemsCar from './ItemsCar';

const ListCar = ({
  data, handleEdit, handleShowDelete, handleCloseDelete, showDelete,
}) => {
  return (
    <div className="container-fluid px-0">
      <div className="row">
        {data.map((value) => {
          return (
            <div className="col-4 mb-5" key={value.id}>
              <ItemsCar
                item={value}
                handleEdit={handleEdit}
                showDelete={showDelete}
                handleCloseDelete={handleCloseDelete}
                handleShowDelete={handleShowDelete}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListCar;
