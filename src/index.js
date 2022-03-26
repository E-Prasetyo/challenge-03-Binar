import React from 'react';
import ReactDOM from 'react-dom';
// import './assets/css/App.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './assets/context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './pages/Route';

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  // <React.StrictMode>
  // </React.StrictMode>,
  document.getElementById('root'),
);
