import React from 'react';
import { TiThMenu } from "react-icons/ti";
import { RiSecurePaymentFill } from "react-icons/ri";
const Featuressection = () => {
  return (
    <section className="relative bg-[#fff9f7] py-16 px-6 md:px-12 lg:px-24">
   
      <div className="hidden md:block absolute  w-32 h-32  ">
        <img src="./Images/leaf.png" alt="image" />
      </div>

      
      <div className="hidden md:block absolute top-5 right-[170px] w-32 h-32 ">
        <img src="./Images/leaf2.png" alt="leaf2" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block  text-[#EB5600] text-sm font-semibold px-6 py-2 rounded-full mb-4 border border-[#EB5600]">
          Why Our?
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Why Choose Our QR Ordering System
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Designed to enhance your dining experience with modern technology that puts you in control
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center max-w-xs text-center">
            <div className="mb-4 p-4 bg-orange-100 rounded-full">
              {/* Icon placeholder */}
              <svg
                className="w-10 h-10 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Instant Ordering</h3>
            <p className="text-gray-600 text-sm">
              Skip the wait. Scan, browse, and order directly from your phone without waiting for staff.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center max-w-xs text-center">
            <div className="mb-4 p-4 bg-orange-100 rounded-full">
             
            <TiThMenu fontSize={40}  color='#EB5600'/>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Digital Menu</h3>
            <p className="text-gray-600 text-sm">
              Interactive menus with images, details &amp; dietary info—right at your fingertips.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center max-w-xs text-center">
            <div className="mb-4 p-4 bg-orange-100 rounded-full">
              {/* Icon placeholder */}
             <RiSecurePaymentFill  fontSize={40}  color='#EB5600' />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Easy Billing</h3>
            <p className="text-gray-600 text-sm">
              Pay directly from your phone with multiple payment options. Split bills easily.
            </p>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Featuressection;
