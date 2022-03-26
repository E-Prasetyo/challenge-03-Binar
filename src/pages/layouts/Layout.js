/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import '../../assets/css/layout.css';
import { Link } from 'react-router-dom';
import useAuth from '../../assets/hooks/useAuth';
import icon from '../../assets/img/Rectangle 63.jpg';
import icon2 from '../../assets/img/Rectangle 62.png';
import dashboard from '../../assets/img/fi_home.png';
import car from '../../assets/img/fi_truck.png';
import menu from '../../assets/img/fi_menu.png';
import user from '../../assets/img/Group 15.png';

const Layout = ({ children, title }) => {
  const { auth, setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({});
  };
  return (
    <div className="container-fluid">
      <div className="row container-content">
        <div className="col-sm-auto bg-primary sticky-top px-0">
          <div className="d-flex flex-sm-column flex-row flex-nowrap align-items-center sticky-to">
            <div className="d-flex justify-content-center w-100">
              <img className="my-2 bg-transparent" src={icon} alt="icon" />
            </div>
            <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
              <li className={`nav-item w-100 action-menu w-100 mx-2 py-3 ${title === 'Dashboard' ? 'action-active' : ''}`}>
                <Link className="" to="/">
                  <div className="d-flex flex-column justify-content-center align-content-center">
                    <div>
                      <img className="w-50" src={dashboard} alt="Dashboard" />
                    </div>
                    <span className="text-white font-menu">Dashboard</span>
                  </div>
                </Link>
              </li>
              <li className={`nav-item w-100 action-menu w-100 mx-2 py-3 ${title === 'Car' ? 'action-active' : ''}`}>
                <Link to="/Car">
                  <div className="d-flex flex-column justify-content-center align-content-center">
                    <div>
                      <img className="w-50" src={car} alt="Dashboard" />
                    </div>
                    <span className="text-white font-menu">Car</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-auto bg-white sticky-top px-0">
          <div className="d-flex flex-sm-column flex-row flex-nowrap align-items-center">
            <div className="d-flex justify-content-center px-3">
              <img className="my-2 bg-transparent" src={icon2} alt="icon" />
            </div>
            <div className="py-3 w-100 text-secondary text-center fw-bold">
              {title}
            </div>
            <ul className="w-100 nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
              <li className={`nav-item w-100 action-menu w-100 mx-2 ${title === 'Dashboard' || title === 'Car' ? 'action-active' : ''}`}>
                <Link className="text-muted text-decoration-none text-center m-1" to={`/${title}`}>
                  <div className="d-flex flex-column justify-content-center align-content-center">
                    <span className="">{title === 'Car' ? 'List Car' : title}</span>
                  </div>
                </Link>
              </li>
              <li>
                <a href="#" className="nav-link p-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                  <div className="d-flex flex-column justify-content-center align-content-center">
                    <div>
                      <img className="w-100" src={car} alt="Dashboard" />
                    </div>
                    <span className="text-white font-menu">Car</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm px-0">
          <div className="container-fluid py-2">
            <div className="row">
              <div className="col-1">
                <a href="#" className="nav-link p-2 action-menu text-center" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                  <img className="action-menu" src={menu} alt="" />
                </a>
              </div>
              <div className="col-11">
                <div className="d-flex flex-row justify-content-end gap-3">
                  <form className="d-flex">
                    <input className="" type="search" placeholder="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                  <div className="dropdown action-menu">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      <img className="px-1" src={user} alt="" />
                      <span className="px-1">{auth?.user}</span>
                    </a>
                    <ul className="dropdown-menu px-1" aria-labelledby="dropdownMenuLink">
                      <li><a className="dropdown-item" onClick={handleLogout}>Logout</a></li>
                      <li><a className="dropdown-item" href="#">Profile</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
