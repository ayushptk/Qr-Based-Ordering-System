import React from 'react';
import SideMenu from './sidemenu';

const Sidebar = () => {
  // Placeholder for any sidebar logic (e.g., collapse/expand)
  return (
    <aside className="h-screen bg-white shadow-md w-64  fixed z-50">
      <SideMenu />
    </aside>
  );
};

export default Sidebar;
