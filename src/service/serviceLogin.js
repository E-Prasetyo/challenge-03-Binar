/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Login } from '../assets/data/data';

const serviceLogin = (username, password) => {
  let result;
  // if (username === 'admin') {
  //   if (password === '12345') {
  //     result = {
  //       login: true,
  //       message: 'success',
  //     };
  //   } else {
  //     result = {
  //       login: false,
  //       message: 'Password salah',
  //     };
  //   }
  // } else {
  //   result = {
  //     login: false,
  //     message: 'Username salah',
  //   };
  // }
  const usernameBol = Login.find((value) => value.username === username);
  const passwordBol = Login.find((value) => value.password === password);
  if (usernameBol) {
    if (passwordBol) {
      result = {
        user: username,
        login: true,
        message: 'success',
      };
    } else {
      result = {
        login: false,
        message: 'Password salah',
      };
    }
  } else {
    result = {
      login: false,
      message: 'Username salah',
    };
  }
  return result;
};

export default serviceLogin;
