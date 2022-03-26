/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import DashboardItem from './DashboardItem';
import ItemDashboard from './ItemDashboard';

const Dashboard = () => {
  // const { auth } = useAuth();
  // if (auth.login === undefined) return <Navigate to="/login" replace />;
  return (
    <div className="container-fluid bg-light px-0">
      <div className="ps-4 pt-3">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item fw-bold active">Dashboard</li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
      <div className="m-4">
        <h5 className="fw-bold">Dashboard</h5>
        <ItemDashboard />
        <ItemDashboard />
        <DashboardItem />
      </div>
    </div>
  );
};

export default Dashboard;
