import React, { useState } from 'react';
import Headernav from '../Headernav/headernav';
import Sidebar from '../Sidebar/sidebar';
import CreateResForm from './createresform';
import { useNavigate } from 'react-router-dom';
import { IoMdCloseCircle } from "react-icons/io"
import { FaHotel } from "react-icons/fa";


const CreateRes = () => {
  const [showForm, setShowForm] = useState(false);
const navigate = useNavigate();
  const handleAddRestaurantClick = () => {
    setShowForm(true);

  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="flex bg-gray-50 ml-[250px] relative">
      <div className="flex-1 flex flex-col">
        <main className={`flex-grow p-8 bg-white m-6 rounded-lg shadow-md flex flex-col items-center justify-center ${showForm ? 'opacity-30 pointer-events-none' : ''}`}>
          <div className="text-center max-w-md">
            <div className="mb-6 bg-[#f8f8f8] p-4 mx-auto rounded-full w-20 h-20 flex items-center justify-center">
     
             <FaHotel fontSize={80} className="text-orange-600" />
            </div>
            <h1 className="text-2xl font-bold mb-2">
              Let's Make Your Restaurant Digital! 
            </h1>
            <p className="text-gray-500 mb-6">
              Add your restaurant to givemymenu and manage everything online—tables, menus, orders, customers, inventory, finance, and staff—all in one app!
            </p>
            <button
              className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
              onClick={handleAddRestaurantClick}
            >
              + Add your restaurant
            </button>
          </div>
        </main>
        {showForm && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={handleCloseForm}
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-md shadow-lg max-w-2xl w-full">
                <CreateResForm />
                  <button
                  className="absolute top-12 left-[930px]   text-gray-600 hover:text-gray-900 hover:cursor-pointer hover:scale-110 transition "
                  onClick={handleCloseForm}
                  aria-label="Close form"
                >
                  <IoMdCloseCircle fontSize={30} color='red'/>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateRes;
