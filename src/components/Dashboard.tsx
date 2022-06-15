import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navigation from './navigation/Navigation';

import './Dashboard.scss';

function Dashboard() {
  return (
    <div className="Dashboard">
      <Navigation></Navigation>
      <div className="content-footer-parent">
        <div className="content p-2">
          <Outlet />
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Dashboard;
