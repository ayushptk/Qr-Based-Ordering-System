import React from 'react';
import garlic from '../../public/Images/garlic.png';
import leaf3 from '../../public/Images/leaf3.png';
import { LuSalad } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { BsFillGiftFill } from "react-icons/bs";
const OurServices = () => {
  return (
    <section className="py-12  text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-center items-center  mx-auto text-center text-[#EB5600] text-sm font-semibold px-6 py-2 rounded-full mb-10 border border-[#EB5600] w-40 ">
  Our Services
</div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
              Everything you need to manage your restaurant
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Customers simply scan a QR code to view the menu, place orders, and pay—all from their phones. No app download needed, reducing wait times and improving order accuracy.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
              Explore
            </button>
          </div>
          {/* Right Content */}
          <div className="flex-1 max-w-xl relative flex justify-center items-center">
            <img
              src={leaf3}
              alt="leaf decoration"
              className="absolute w-40 opacity-100 -top-5 -left-10"
            />
            <img
              src={garlic}
              alt="leaf decoration"
              className="absolute w-30  -right-12 bottom-70 "
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md z-10">
              {/* Service Card */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
     <LuSalad fontSize={40} color='#F97316' />
                <h3 className="text-orange-500 font-bold uppercase mb-1">CATERING</h3>
                <p className="text-[#BA6664] text-sm">
                  Delight your guests with our flavors and presentation
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <TbTruckDelivery fontSize={40} color='#F97316' />
                <h3 className="text-orange-500 font-bold uppercase mb-1">FAST DELIVERY</h3>
                <p className="text-[#BA6664] text-sm">
                  We deliver your order promptly to your door
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaCartShopping  fontSize={40} color='#F97316' />
                <h3 className="text-orange-500 font-bold uppercase mb-1">ONLINE ORDERING</h3>
                <p className="text-[#BA6664] text-sm">
                  Explore menu &amp; order with ease using our Online Ordering
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <BsFillGiftFill  fontSize={40} color='#F97316' />
                <h3 className="text-orange-500 font-bold uppercase mb-1">GIFT CARDS</h3>
                <p className="text-[#BA6664] text-sm">
                  Give the gift of exceptional dining with Foodi Gift Cards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
