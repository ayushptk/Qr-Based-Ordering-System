import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaThLarge,
  FaClipboardList,
  FaRegComments,
  FaCalendarAlt,
  FaBoxOpen,
  FaStar,
  FaChevronDown,
} from 'react-icons/fa';

const SideMenu = () => {
  const menuItems = [
    { name: 'Dashboard',
       icon: <FaThLarge />, 
       badge: null, 
       path: 'dashboard'
       },


    { name: 'Orders', icon: <FaClipboardList />, badge: null, path: 'orders' },
    { name: 'Notification', icon: <FaRegComments />, badge: null, path: 'notification' },
    { name: 'Table', icon: <FaCalendarAlt />, badge: null, path: 'createtable' },
    { name: 'Menu', icon: <FaBoxOpen />, badge: null, path: 'menu' },
    { name: 'Inventory', icon: <FaBoxOpen />, badge: null, dropdown: true, path: 'inventory' },
    { name: 'Reviews', icon: <FaStar />, badge: null, path: 'reviews' },
  ];

  return (
    <div className="bg-white h-full w-64 flex flex-col p-4 shadow-sm">
      <div className="flex items-center space-x-2 mb-6">
        <img
          src="/Images/logo.png"
          alt="Logo"
          className="w-8 h-8"
        />
        <h1 className=" text-2xl font-large font-bold text-orange-600 font-gabarito font-semibold">givemymenu</h1>
      </div>
      <div className="mb-6">
        <div className="bg-gray-100 rounded-md p-3 flex items-center space-x-3">
          <img
            src="/Images/hotel.svg"
            alt="Your Restaurant"
            className="w-8 h-8"
          />
          <div>
            <p className="text-sm font-semibold">Your Restaurant</p>
            <span className="text-xs text-white bg-orange-500 px-2 py-0.5 rounded-full">Free</span>
          </div>
        </div>
      </div>
      <nav className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer hover:bg-orange-100 ${
                isActive ? 'bg-orange-100 border-l-4 border-orange-500' : 'text-gray-700'
              }`
            }
          >
            <div className="text-orange-500">{item.icon}</div>
            <span className="text-gray-700 font-medium">{item.name}</span>
            {item.badge && (
              <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                {item.badge}
              </span>
            )}
            {item.dropdown && (
              <FaChevronDown className="ml-auto text-gray-400" />
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default SideMenu;
