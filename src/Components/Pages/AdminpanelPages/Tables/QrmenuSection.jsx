import React, { useState } from 'react';
import { FiEdit, FiX, FiDownload, FiPrinter } from 'react-icons/fi';

const QrmenuSection = ({ onClose }) => {
  const [available, setAvailable] = useState(false);

  const toggleAvailable = () => {
    setAvailable((prev) => !prev);
  };

  return (
    <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Cabin - Cabin 1</h2>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="flex items-center text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Edit"
          >
            <FiEdit className="w-5 h-5" />
            <span className="ml-1 text-sm font-medium">Edit</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Close"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Table Details */}
      <div className="p-4 space-y-3 flex-grow overflow-y-auto">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-700 text-sm">
          <div>
            <p className="font-semibold text-gray-900">Table Capacity</p>
            <p>4</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Table Type</p>
            <p>Cabin</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Space</p>
            <p>-</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Table Status</p>
            <p>
              <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-200 text-blue-700 select-none">
                Open
              </span>
            </p>
          </div>
          <div className="col-span-2 flex items-center space-x-3">
            <p className="font-semibold text-gray-900">Available</p>
            <label htmlFor="available-toggle" className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                id="available-toggle"
                className="sr-only peer"
                checked={available}
                onChange={toggleAvailable}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
            </label>
          </div>
        </div>

        {/* Share Table Link */}
        <div className="mt-6 p-4 border border-gray-200 rounded-md bg-gray-50">
          <div className="flex justify-between items-center mb-2 text-sm text-gray-700">
            <span>Share table link</span>
            <a href="#" className="text-blue-600 hover:underline">
              Get your own domain?
            </a>
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              readOnly
              value="https://rx_h6ga9mkz.restro.link/en/dine-..."
              className="flex-grow rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-900 focus:outline-none"
            >
              Open Link
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              type="button"
              className="whitespace-nowrap py-4 px-1 border-b-2 border-red-600 text-sm font-semibold text-red-600"
            >
              QR Code
            </button>
            <button
              type="button"
              className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent text-sm font-semibold text-gray-500 hover:text-gray-700"
            >
              Activity
            </button>
          </nav>
        </div>

        {/* QR Code Section */}
        <div className="mt-6 flex flex-col items-center space-y-3">
          {/* Logo */}
          <img
            src="/public/Images/Logo.png"
            alt="RestroX Logo"
            className="w-24 h-auto"
          />
          {/* QR Code */}
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ayushhotel"
            alt="QR Code"
            className="w-36 h-36"
          />
          <p className="text-base font-semibold text-gray-900">ayushhotel</p>
          <p className="text-xs text-gray-500 tracking-widest">TODAY'S MENU</p>
          <hr className="w-full border-dashed border-t border-gray-300" />
          <p className="text-lg font-semibold text-gray-900">Cabin 1</p>
        </div>
      </div>

      {/* Footer Icons */}
      <div className="flex justify-start space-x-6 p-4 border-t border-gray-200">
        <button
          type="button"
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Download"
        >
          <FiDownload className="w-5 h-5" />
          <span className="text-sm font-medium">Download</span>
        </button>
        <button
          type="button"
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Print"
        >
          <FiPrinter className="w-5 h-5" />
          <span className="text-sm font-medium">Print</span>
        </button>
      </div>
    </div>
  );
};

export default QrmenuSection;
