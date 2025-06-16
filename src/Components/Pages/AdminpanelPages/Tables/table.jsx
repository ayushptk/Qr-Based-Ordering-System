import React, { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import QrmenuSection from './QrmenuSection';

const tablesData = [
  { id: 1, name: 'Cabin 1', type: 'Cabin', capacity: 4, status: 'Open', available: true },
  { id: 2, name: 'Table 1', type: 'Table',  capacity: 4, status: 'Open', available: true },
  { id: 3, name: 'Table 2', type: 'Table',  capacity: 4, status: 'Open', available: true },
];

const TableSection = () => {
  const [tables, setTables] = useState(tablesData);
  const [selectedTable, setSelectedTable] = useState(null);
  const [isQrMenuOpen, setIsQrMenuOpen] = useState(false);

  const toggleAvailable = (id) => {
    setTables((prev) =>
      prev.map((table) =>
        table.id === id ? { ...table, available: !table.available } : table
      )
    );
  };

  const openQrMenu = (table) => {
    setSelectedTable(table);
    setIsQrMenuOpen(true);
  };

  const closeQrMenu = () => {
    setIsQrMenuOpen(false);
    setSelectedTable(null);
  };

  return (
    <div className="relative flex">
      {/* Main Table Section */}
      <div className={`p-4 overflow-x-auto ml-6 ms-[16rem] bg-white transition-all duration-300 ease-in-out ${isQrMenuOpen ? 'w-[calc(100%-20rem)]' : 'w-full'}`}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 md:mb-0">Tables</h2>
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              type="button"
              className="flex items-center text-gray-900 hover:text-gray-700 focus:outline-none"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                ></path>
              </svg>
              <span className="text-sm font-medium">Search</span>
            </button>

            {/* Filter */}
            <button
              type="button"
              className="flex items-center text-gray-900 hover:text-gray-700 focus:outline-none"
              aria-label="Filter"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
                ></path>
              </svg>
              <span className="text-sm font-medium">Filter</span>
            </button>

            {/* Add New Button */}
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-md focus:outline-none"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
              </svg>
              Add New
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-sm">
            <thead className="bg-gray-100 text-gray-900 text-left text-sm font-semibold">
              <tr>
                <th className="px-4 py-3 border-b border-gray-200 w-12">SN</th>
                <th className="px-6 py-3 border-b border-gray-200 w-48">Table Name</th>
                <th className="px-6 py-3 border-b border-gray-200 w-40">Types</th>
                <th className="px-4 py-3 border-b border-gray-200 w-20 text-center">Capacity</th>
                <th className="px-4 py-3 border-b border-gray-200 w-24">Status</th>
                <th className="px-4 py-3 border-b border-gray-200 w-28 text-center">Available</th>
                <th className="px-4 py-3 border-b border-gray-200 w-12"></th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {tables.map((table, index) => (
                <tr
                  key={table.id}
                  className={index % 2 === 0 ? 'bg-white hover:bg-gray-100 cursor-pointer' : 'bg-gray-50 hover:bg-gray-100 cursor-pointer'}
                  onClick={() => openQrMenu(table)}
                >
                  <td className="px-4 py-3 border-b border-gray-200">{index + 1}</td>
                  <td className="px-6 py-3 border-b border-gray-200">{table.name}</td>
                  <td className="px-6 py-3 border-b border-gray-200">{table.type}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-center">{table.capacity}</td>
                  <td className="px-4 py-3 border-b border-gray-200">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-200 text-blue-700 select-none">
                      {table.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-center">
                    <label htmlFor={`toggle-${table.id}`} className="inline-flex relative items-center cursor-pointer" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        id={`toggle-${table.id}`}
                        className="sr-only peer"
                        checked={table.available}
                        onChange={() => toggleAvailable(table.id)}
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
                      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
                    </label>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-center cursor-pointer" onClick={(e) => e.stopPropagation()}>
                    <BsThreeDots />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-2 text-gray-500 text-xs">
          0 of {tables.length} row(s) selected.
        </div>
      </div>

      {/* QR Menu Section */}
      {isQrMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out translate-x-0">
          <QrmenuSection onClose={closeQrMenu} />
        </div>
      )}
    </div>
  );
};

export default TableSection;
