import React from 'react';
import { FaHome } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';

const BelowMenu = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-[900px] mx-auto w-full px-4 sm:px-6 md:px-8">
      <ul className="flex justify-between max-w-[900px] mx-auto py-2">
        {/* Home */}
        <li className="flex flex-col items-center text-gray-600 hover:text-gray-800 cursor-pointer">
          <Link to="/" className="flex flex-col items-center">
            <FaHome />
            <span className="text-sm">Home</span>
          </Link>
        </li>

        {/* Dishes */}
        <li className="flex flex-col items-center text-gray-600 hover:text-gray-800 cursor-pointer">
          <Link to="/dishes" className="flex flex-col items-center">
            <IoFastFood />
            <span className="text-sm">Dishes</span>
          </Link>
        </li>

        {/* Cart - active */}
        <li className="flex flex-col items-center  text-gray-600  hover:text-gray-800 cursor-pointer">
          <Link to="/cart" className="flex flex-col items-center">
            <FaShoppingCart />
            <span className="text-sm font-semibold">Cart</span>
          </Link>
        </li>

        {/* More */}
        <li className="flex flex-col items-center text-gray-600 hover:text-gray-800 cursor-pointer">
          <Link to="/more" className="flex flex-col items-center">
            <BsThreeDotsVertical />
            <span className="text-sm">More</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BelowMenu;
