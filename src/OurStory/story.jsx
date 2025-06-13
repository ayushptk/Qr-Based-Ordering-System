import React from 'react';
import storyImage from '../../public/Images/ourstory.png';

const OurStory = () => {
  return (
    <section className=" py-12 px-4 sm:px-6 lg:px-20">
         <button className="border border-[#F15A29] text-[#F15A29] rounded-full px-6 py-1 text-sm font-medium mb-6 mx-auto item-center flex justify-center">
            Our Story
          </button>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2">
          <img
            src={storyImage}
            alt="Our Story"
            className="rounded-3xl w-full object-cover"
          />
          <div className="absolute bottom-4 left-60 bg-[#F15A29] text-white text-xs font-semibold rounded-lg shadow-lg text-center  ] !px-10 py-8  ">
            500+ <br />
            Daily Orders
          </div>
        </div>
        

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-gray-700">
         
          <p className="mb-4 text-sm sm:text-base leading-relaxed">
            We started givemymenu after experiencing firsthand the frustration of long waits at restaurants – both as customers and as restaurant owners. We saw overwhelmed staff trying to manage orders while customers grew impatient.
          </p>
          <p className="mb-4 text-sm sm:text-base leading-relaxed">
            Our solution allows customers to order directly from their phones, eliminating wait times, miscommunications, and improving service efficiency.
          </p>
          <p className="mb-8 text-sm sm:text-base leading-relaxed">
            We’re proud to help restaurants streamline operations and enhance the dining experience nationwide.
          </p>

          <div className="flex gap-8 text-[#F15A29] font-semibold text-sm sm:text-base">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold">2+</span>
              <span>Years in Service</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold">10K+</span>
              <span>Happy Customers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold">50+</span>
              <span>Menu Items</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
