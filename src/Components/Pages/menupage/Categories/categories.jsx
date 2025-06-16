import React from 'react';
import { IoIosSearch } from "react-icons/io";

const categories = [
  {
    id: 1,
    name: 'Food Menu',
    img: './Burger.png',
  },
  {
    id: 2,
    name: 'Drinks',
    img: './Drinks.png',
  },
  {
    id: 3,
    name: 'Sides',
    img: './Side.png',
  },
  {
    id: 4,
    name: 'Cafe Menu',
    img: './Cafe.png',
  },
];

const Categories = () => {
  return (
    <section className="max-w-[900px] mx-auto px-4 mt-6  bg-[#FFF5F3]">
      <h2 className="text-gray-600 font-medium mb-3">Categories</h2>
      <div className="flex space-x-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-3 w-30 h-20 "
          >
            <img src={category.img} alt={category.name} className="w-14 h-14 mb-1" />
            <span className="text-xs text-gray-700">{category.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        
        < input 
          type="text"
          placeholder="Search menu items..."
          className="w-full border border-red-200 rounded-lg py-2 px-4 text-gray-700  bg-[#fff5f3]"
        />
        
      </div>
    </section>
  );
};

export default Categories;
