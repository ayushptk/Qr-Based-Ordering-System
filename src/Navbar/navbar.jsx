import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
   const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

   const handleLoginClick = () => {
    navigate('/login');
    console.log('Login button clicked');
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex items-center space-x-2">
           
            <span className="text-green-600 text-2xl">
                <img src="./Images/logo.png" alt="Logo" />
            </span>
            <span className="text-orange-500 font-bold text-xl select-none">give<span>mymenu</span></span>
          </div>

       
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-orange-500 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 font-medium">Features</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 font-medium">About us</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 font-medium">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 font-medium">Contact</a>
          </div>

         
          <div className="hidden md:block">
            <button className="bg-[#EB5600] text-white px-9 py-2 rounded-full hover:bg-orange-600 transition" onClick={handleLoginClick}>
              Login
            </button>
          </div>

       
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
         
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-700 hover:text-orange-500 font-medium px-3 py-2 rounded-md">Home</a>
            <a href="#" className="block text-gray-700 hover:text-orange-500 font-medium px-3 py-2 rounded-md">Features</a>
            <a href="#" className="block text-gray-700 hover:text-orange-500 font-medium px-3 py-2 rounded-md">About us</a>
            <a href="#" className="block text-gray-700 hover:text-orange-500 font-medium px-3 py-2 rounded-md">Pricing</a>
            <a href="#" className="block text-gray-700 hover:text-orange-500 font-medium px-3 py-2 rounded-md">Contact</a>
           
            <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition mt-2" onClick={handleLoginClick}>Login
            </button>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
