import React, { useState } from 'react';
import { BsBoxArrowLeft } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
const restaurantTypes = [
  'FastFood',
  'Resort',
  'Hotel',
  'Bakery',
  'Cloud Kitchen',
  'Bar',
  'Cafe',
  'Restaurant',
];

const CreateResForm = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantNumber, setRestaurantNumber] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [restaurantAddress, setRestaurantAddress] = useState('');

  const toggleType = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const resetForm = () => {
    setRestaurantName('');
    setRestaurantNumber('');
    setSelectedTypes([]);
    setRestaurantAddress('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Restaurant saved!');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md font-barlow">
      <div className='flex gap-5 items-center align-center'>
      <button
        type="button"
        className="mb-2 text-red-600 hover:text-red-800 flex items-center border  justify-center rounded-md"
      
      >
       <RiArrowLeftSLine t fontSize={30} className='' />
      </button>
      <h2 className="text-[20px] font-medium mb-3">Create Restaurant</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-2 mt-4">
        <div>
          <label htmlFor="restaurantName" className="block font-medium mb-1 ">
            Restaurant Name <span className="text-red-500">*</span>
          </label>
          <input
            id="restaurantName"
            type="text"
            placeholder="Enter your restaurant name"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <div>
          <label htmlFor="restaurantNumber" className="block font-medium mb-1">
            Restaurant Number <span className="text-red-500">*</span>
          </label>
          <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-red-400">
            <button
              type="button"
              className="flex items-center px-3 bg-gray-100 border-r border-gray-300"
              aria-label="Select country code"
            >
              <img
                src="https://flagcdn.com/w20/np.png"
                alt="Nepal flag"
                className="w-5 h-5 mr-1"
                loading="lazy"
              />
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <input
              id="restaurantNumber"
              type="tel"
              placeholder="+977 981 7458171"
              value={restaurantNumber}
              onChange={(e) => setRestaurantNumber(e.target.value)}
              required
              className="flex-grow px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-2">
            Type <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-3">
            {restaurantTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => toggleType(type)}
                className={`px-4 py-2 rounded-md font-semibold border ${
                  selectedTypes.includes(type)
                    ? 'bg-red-400 text-white border-red-400'
                    : 'bg-gray-100 text-gray-900 border-transparent'
                } focus:outline-none focus:ring-2 focus:ring-red-400`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="restaurantAddress" className="block font-medium mb-1">
            Restaurant Address
          </label>
          <input
            id="restaurantAddress"
            type="text"
            placeholder="Enter restaurant's address"
            value={restaurantAddress}
            onChange={(e) => setRestaurantAddress(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={resetForm}
            className="text-gray-700 font-semibold hover:underline"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-red-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-500 transition"
          >
            Save Restaurant
          </button>
        </div>
      
      </form>
    </div>
  );
};

export default CreateResForm;
