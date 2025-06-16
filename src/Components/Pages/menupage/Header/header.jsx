import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="flex justify-between items-center p-4 bg-[#fff5f3] max-w-[900px] mx-auto">
      <div className="flex items-center space-x-3">
        <img
          src="./hotelimage.jpg"
          alt="Cozy FoodLand"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-red-600 font-semibold text-lg">Cozy FoodLand</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-600 border border-gray-300 rounded-md px-3 py-1">
          Table #1
        </div>
        <Link to="/cart">
        <button className="relative bg-red-600 text-white px-4 py-1 rounded-full flex items-center space-x-2">
         <FaShoppingCart />
          <span>Cart</span>
          <span className="absolute -top-1 -right-1 bg-white text-red-600 rounded-full text-xs font-bold px-1.5">
            {totalQuantity}
          </span>
        </button>
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
