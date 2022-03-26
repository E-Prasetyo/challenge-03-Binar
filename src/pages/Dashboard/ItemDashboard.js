/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Dashboard as data } from '../../assets/data/data';
import iconSort from '../../assets/img/fi_sort.png';

const ItemDashboard = () => {
  return (
    <div>
      <p className="mt-3">
        <span className="bg-primary">&nbsp;</span>
        {' '}
        List Order
      </p>
      <table border="1" className="table">
        <tbody>
          <tr className="bg-info border-1">
            <th className="border border-1"><small>No</small></th>
            <th className="border border-1"><small>Username</small></th>
            <th className="border border-1">
              <small>
                <span><img src={iconSort} alt="" /></span>
                Car
              </small>
            </th>
            <th className="border border-1">
              <small>
                <span><img src={iconSort} alt="" /></span>
                Star Rent
              </small>
            </th>
            <th className="border border-1">
              <small>
                <span><img src={iconSort} alt="" /></span>
                Finish Rent
              </small>
            </th>
            <th className="border border-1">
              <small>
                <span><img src={iconSort} alt="" /></span>
                Price
              </small>
            </th>
            <th className="border border-1">
              <small>
                <span><img src={iconSort} alt="" /></span>
                Status
              </small>
            </th>
          </tr>
          { data.map((value, index) => {
            return (
              <tr className="bg-white" key={index}>
                <td>{index + 1}</td>
                <td>{value.Username}</td>
                <td>{value.Car}</td>
                <td>{value.starRent}</td>
                <td>{value.finishRent}</td>
                <td>{value.price}</td>
                <td>{value.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-2">
            <div>Limit</div>
            <select className="form-select-sm" aria-label="Default select example" defaultValue="10">
              {/* <option selected value="0" disabled>10</option> */}
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </div>
          <div className="col-3">
            <div>Jam To Page</div>
            <div className=" d-flex flex-row align-items-center">
              <select className="form-select-sm" aria-label="Default select example" defaultValue="10">
                {/* <option selected value="0" disabled>10</option> */}
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
              </select>
              <button className="btn btn-primary btn-sm">Go</button>
            </div>
          </div>
          <div className="col-7">
            <div className="d-flex flex-column justify-content-end align-items-end">
              <div><br /></div>
              <div className="btn-group me-2 border border-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-outline-secondary bg-white">{'<<'}</button>
                <button type="button" className="btn btn-outline-secondary bg-white">1</button>
                <button type="button" className="btn btn-outline-secondary bg-white">2</button>
                <button type="button" className="btn btn-outline-secondary bg-white">...</button>
                <button type="button" className="btn btn-outline-secondary bg-white">3</button>
                <button type="button" className="btn btn-outline-secondary bg-white">{'>>'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDashboard;
