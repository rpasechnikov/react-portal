import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navigation from './navigation/Navigation';

import './Dashboard.scss';

function Dashboard() {
  return (
    <div className="Dashboard">
      <Navigation></Navigation>
      <div className="content-parent order-1">
        <div className="content">
          <Outlet />
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Dashboard;
