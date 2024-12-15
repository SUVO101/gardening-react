import React, { useEffect } from 'react';
import PlantManagement from "../components/PlantManagement";

const Admin = ({ onLogout }) => {
  useEffect(() => {
    // Redirect if not logged in
    if (!localStorage.getItem('AdminloggedIn')) {
      onLogout();
    }
  }, [onLogout]);

  const handleLogout = () => {
    localStorage.removeItem('AdminloggedIn');
    onLogout();
  };

  return (
    <div className="">
      <div className="d-flex">
      {/* Sidebar */}
      <nav className="col-md-3 d-none d-md-block body-dark-bg-color sidebar">
        <div className="sidebar-sticky vh-100">
          <h4 className="text-center pt-5 body-light-text-color">Admin Dashboard</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <button className="nav-link ms-5 mt-3 body-bg-color rounded-pill" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            </li>
            {/* Add other sidebar items here */}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main role="main" className="col-md-8 ms-sm-auto col-lg-9 px-4 body-bg-color">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2 body-text-color">Plants Management</h1>
        </div>
        <PlantManagement />
      </main>
    </div>
    </div>
  );
};

export default Admin;
