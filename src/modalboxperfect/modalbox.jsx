import React from 'react';
import { MdOutlineEmail } from "react-icons/md";

const ModalBox = () => {
  return (
    <div className="max-w-6xl mx-auto p-6  border border-orange-400 rounded-3xl text-center relative">
      <div className="inline-block px-6 py-2 mb-4 border border-orange-400 rounded-full text-[#EA5B2C] font-medium text-sm">
        Perfect for Cafes, Restaurants & Food Courts
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-medium text-gray-700 mb-2">
        Upgrade Your Guest Experience with Effortless, <br /> Contactless Ordering
      </h2>
      <p className="text-gray-600 text-base sm:text-lg mb-6">
        Fast, contactless, and efficient
      </p>
      <button className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex gap-2">
       <MdOutlineEmail fontSize={20} />
        Let’s Connect
      </button>
    </div>
  );
};

export default ModalBox;
