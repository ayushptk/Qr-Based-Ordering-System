import React from 'react';
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
const Headernav = () => {
  return (
    <header className="flex  items-center  bg-white px-6 py-4 shadow-sm font-poppins" >
      {/* Left Section */}
      <div className="flex flex-col  ml-[260px] ">
        <h1 className="text-lg font-bold text-gray-700 ">Dashboard</h1>
        <p className="text-sm text-gray-500">Hello Ayush, welcome back!</p>
      </div>

      {/* Center Section */}
      <div className="flex-1 max-w-lg  relative left-[100px]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search anything"
            className=" border border-gray-300 rounded-md py-2 pl-10 pr-4 text-sm placeholder-gray-400"
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        <button className="relative p-2 rounded-lg hover:bg-gray-100 border border-gray-300">
         <IoMdNotifications  fontSize={25} color={'#374151'}/>
          {/* <span className="absolute top-3 right-3 inline-block w-3 h-3 bg-red-600 rounded-full"></span> */}
        </button>

        <button className=" relative p-2 rounded-lg hover:bg-gray-100 border border-gray-300">
        <IoMdSettings fontSize={25} color={'#374151'} />
        </button>

        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-600">Aayush Pathak</p>
            <p className="text-xs font-small text-gray-500">Admin</p>
          </div>
          <img
            src="./Images/images.jpg"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Headernav;
