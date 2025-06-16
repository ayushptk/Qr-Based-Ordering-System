import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/sidebar'; // Assuming this is your main sidebar component
import Headernav from './Headernav/headernav'; // Assuming this is your main header component
import CreateRestaurant from './createrestutrant/createres'; // Example page
import QrmenuSection from './Tables/QrmenuSection'; // Example page
import TableComponent from './Tables/table'; // Example page

// A layout component for the admin panel
const AdminLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Headernav />
        <main style={{ padding: '20px', flexGrow: 1 }}>
          <Outlet /> {/* Nested routes will render here */}
        </main>
      </div>
    </div>
  );
};

function AdminpanelApp() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        {/* Define your admin panel routes here */}
        {/* Default or dashboard page for admin */}
        <Route index element={<div>Welcome to Admin Panel</div>} /> 
        <Route path="create-restaurant" element={<CreateRestaurant />} />
        <Route path="qr-menu" element={<QrmenuSection />} />
        <Route path="tables" element={<TableComponent />} />
        {/* Add other admin routes as needed */}
      </Route>
    </Routes>
  );
}

export default AdminpanelApp;