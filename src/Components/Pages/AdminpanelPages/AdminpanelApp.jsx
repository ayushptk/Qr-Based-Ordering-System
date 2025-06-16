import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Headernav from './Headernav/headernav'; // Assuming this is your main header component
import TableSection from './Tables/table';
import CreateRes from './createrestutrant/createres';
import Sidebar from './Sidebar/sidebar';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Headernav />
        <Outlet />
      </div>
    </div>
  );
};

function AdminpanelApp() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<CreateRes />} />
        <Route path="create-restaurant" element={<CreateRes/>} />
        <Route path= "/createtable" element ={<TableSection />}/>
       
      </Route>
    </Routes>
  );
}

export default AdminpanelApp;
