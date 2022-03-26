/* eslint-disable consistent-return */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../assets/hooks/useAuth';
import Gambar from '../../assets/img/image 2.png';
import iconPersegi from '../../assets/img/Rectangle 62.png';
import serviceLogin from '../../service/serviceLogin';
import '../../assets/css/Login.css';

const index = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const handleSubmit = (data) => {
    data.preventDefault();
    const response = serviceLogin(username, password);
    if (response.login) {
      setAuth(response);
      return navigate('/');
    }
    setError(response.login);
  };
  console.log(error);

  return (
    <div className="container-fluid px-0 full-body">
      <div className="row px-0">
        <div className="col-6">
          <img className="full-body" src={Gambar} alt="" />
        </div>
        <div className="col-6">
          <div className="d-flex flex-column justify-content-center full-body px-4">
            <div className="pb-2">
              <img className="" src={iconPersegi} alt="" />
            </div>
            <h3>Welcome, Admin BCR</h3>
            {error === false ? <p className="bg-secondary text-danger p-2">Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.</p> : ''}
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <label className="py-1">Email</label>
              <input
                className=""
                type="text"
                placeholder="Contoh: johndee@gmail.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="Username"
                required
              />
              <label className="py-1">Password</label>
              <input
                className=""
                type="password"
                placeholder="6+ karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="Password"
                required
              />
              <button className="btn btn-primary mt-4">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
