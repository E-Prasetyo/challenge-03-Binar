/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgUpload from '../../../assets/img/fi_upload.png';

const Add = () => {
  const navigate = useNavigate();
  const handleSave = () => {
    return navigate('/car?save=true');
  };
  const handleCancel = () => {
    return navigate('/car');
  };
  return (
    <div className="container-fluid bg-light px-0">
      <div className="ps-4 pt-3">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item fw-bold active">Car</li>
            <li className="breadcrumb-item active">List Car</li>
            <li className="breadcrumb-item active">Add New Car</li>
          </ol>
        </nav>
        <h5 className="fw-bold">Add New Car</h5>
        <div className="bg-white container-fluid p-4 border border-1">
          <div className="row">
            <div className="col-3">
              <div className="d-flex flex-column gap-3">
                <label htmlFor="name" className="form-label">Nama*</label>
                <label htmlFor="price" className="form-label">Harga*</label>
                <label htmlFor="photo" className="form-label mb-4">Foto*</label>
                <label
                  htmlFor="startRent"
                  className="form-label mt-2"
                >
                  Start Rent
                </label>
                <label htmlFor="photo" className="form-label">Finish Rent</label>
                <label htmlFor="photo" className="form-label">Created at</label>
                <label htmlFor="photo" className="form-label">Updated at</label>
              </div>
            </div>
            <div className="col-9">
              <div className="d-flex flex-column gap-3">
                <input
                  type="text"
                  className="form-input w-50"
                  id="name"
                  name="name"
                  placeholder="Placeholder"
                />
                <input
                  type="text"
                  className="form-input w-50"
                  id="price"
                  name="price"
                  placeholder="Placeholder"
                />
                <div className="">
                  <div className="form-input input-group w-50">
                    <input
                      type="text"
                      className="form-control border-end-0 border border-dark"
                      placeholder="IMG/2/2022/001"
                    />
                    <span
                      className="input-group-text bg-white border-start-0 border border-dark"
                      id="basic-addon2"
                    >
                      <img src={imgUpload} alt="" />
                    </span>
                  </div>
                  <span className="text-secondary"><small>File size max 2MB</small></span>
                </div>
                <div className="text-secondary w-50" id="startRent">-</div>
                <div className="text-secondary w-50" id="startRent">-</div>
                <div className="text-secondary w-50 py-2" id="startRent">-</div>
                <div className="text-secondary w-50" id="startRent">-</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5 d-flex flex-row gap-3">
          <button className="btn btn-outline-primary" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
