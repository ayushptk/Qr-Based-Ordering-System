import React from 'react';
import heroImage from '../../public/Images/hero-image.jpg';
import { IoFastFoodSharp } from "react-icons/io5";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
const Herosection = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
       
        <div className="flex-1 flex flex-col justify-center items-start space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold !font-salsa">Scan ,Order & Enjoy</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 !mt-[5px] !font-salsa">Your Meal</h1>
          <p className="text-gray-600 max-w-md">
            Experience the future of dining with our QR-based ordering system. No waiting, no hassle – just scan, order and enjoy!
          </p>
          <div className="flex space-x-4">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-md shadow hover:bg-orange-700 transition flex items-center gap-2">
              <IoFastFoodSharp fontSize={20} />
              Start Ordering
            </button>
            <button className="border border-orange-600 text-orange-600 px-6 py-3 rounded-md shadow hover:bg-orange-50 transition flex items-center gap-2">
              
             <MdOutlineSlowMotionVideo fontSize={20} />
              How it works
            </button>
          </div>
        </div>

       
        <div className="flex-1 relative max-w-md md:max-w-lg mx-auto">
          {/* Hot spicy Food label */}
          <div className="absolute top-12 left-4 bg-white rounded-full px-4 py-2 shadow-md text-sm text-red-500 font-semibold flex items-center gap-1 z-20">
            Hot spicy Food <span>🌶️</span>
          </div>

          {/* Main Image */}
          <img
            src={heroImage}
            alt="QR code ordering on phone with food"
            className=" object-cover w-full h-auto relative z-10 mt-[-60px]"
          />

          {/* Decorative leaf/plant SVG */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 pointer-events-none select-none z-0">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300 opacity-30">
              <path d="M60 0C93.1371 0 120 26.8629 120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M60 20C75.464 20 88 32.536 88 48C88 63.464 75.464 76 60 76C44.536 76 32 63.464 32 48C32 32.536 44.536 20 60 20Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
