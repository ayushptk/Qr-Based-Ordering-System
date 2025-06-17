import React, { useState } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import {
  lineChartData,
  lineChartOptions,
  donutChartData,
  donutChartOptions,
  barChartData,
  barChartOptions,
} from './dashboarddata';

const summaryCards = [
  {
    id: 1,
    title: 'Total Orders',
    value: '3,248',
    icon: (
      <svg
        className="w-6 h-6 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18"></path>
      </svg>
    ),
    change: '1.58%',
    changePositive: true,
  },
  {
    id: 2,
    title: 'Total Customer',
    value: '12,948',
    icon: (
      <svg
        className="w-6 h-6 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z"
        ></path>
      </svg>
    ),
    change: '0.42%',
    changePositive: false,
  },
  {
    id: 3,
    title: 'Total Revenue',
    value: 'NPR 21,586',
    icon: (
      <svg
        className="w-6 h-6 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2v2m0 16v2m8-10h-2M4 12H2m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414"
        ></path>
      </svg>
    ),
    change: '2.36%',
    changePositive: false,
  },
];

const orderTypes = [
  { id: 1, type: 'Dine-In', percentage: 45, count: 900, icon: '🍽️' },
  { id: 2, type: 'Takeaway', percentage: 30, count: 600, icon: '🥡' },
  { id: 3, type: 'Online', percentage: 25, count: 500, icon: '🛵' },
];

const recentOrdersData = [
  {
    id: 'ORD1025',
    photo: '/public/OmeleteNoodle.png',
    menu: 'Omlete Noodles',
    category: 'Chicken Momo',
    qty: 3,
    amount: 'NPR 130.00',
    customer: 'Ayush Pathak',
    status: 'On Process',
    statusColor: 'bg-yellow-400 text-white-400',
  },
  {
    id: 'ORD1026',
    photo: '/public/ChickenMomo.png',
    menu: 'Chicken Momo',
    category: 'Pasta',
    qty: 1,
    amount: 'NPR 180.00',
    customer: 'Monica Hamal',
    status: 'Cancelled',
    statusColor: 'bg-red-600 text-white',
  },
  {
    id: 'ORD1027',
    photo: '/public/images.jpg',
    menu: 'Thakhali Set',
    category: 'Burger',
    qty: 1,
    amount: 'NPR 300.00',
    customer: 'Shubraj Lama',
    status: 'Completed',
    statusColor: 'bg-orange-400 text-white',
  },
];

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterWeek, setFilterWeek] = useState('This Week');

  const filteredOrders = recentOrdersData.filter((order) =>
    order.menu.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ms-[17rem]  bg-gray-50 min-h-screen mt-12">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {summaryCards.map(({ id, title, value, icon, change, changePositive }) => (
          <div
            key={id}
            className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-orange-100 rounded-lg">{icon}</div>
              <div>
                <p className="text-gray-500 text-sm">{title}</p>
                <p className="text-2xl font-semibold text-gray-900">{value}</p>
              </div>
            </div>
            <div
              className={`text-sm font-semibold ${
                changePositive ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {change}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Total Revenue Line Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Total Revenue</h2>
              <select className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white">
                <option>Last 8 Months</option>
                <option>Last Year</option>
                <option>This Year</option>
              </select>
            </div>
            <Line data={lineChartData} options={lineChartOptions} />
          </div>

          {/* Orders Overview Bar Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Orders Overview</h2>
              <div className="text-sm text-gray-500">{filterWeek}</div>
            </div>
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Top Categories Donut Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Top Categories</h2>
              <select className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white">
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last Year</option>
              </select>
            </div>
            <Doughnut data={donutChartData} options={donutChartOptions} />
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-orange-500 inline-block"></span>
                <span> Chicken Momo 30%</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                <span>Crunchy Burger 25%</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-yellow-300 inline-block"></span>
                <span>Dessert 25%</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-200 inline-block"></span>
                <span>Omlete Noodles 20%</span>
              </li>
            </ul>
          </div>
{/* 
          {/* Order Types 
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Order Types</h2>
              <select className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="space-y-4">
              {orderTypes.map(({ id, type, percentage, count, icon }) => (
                <div key={id} className="flex items-center space-x-4">
                  <div className="text-2xl">{icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-semibold">{type}</span>
                      <span className="text-gray-700 font-semibold">{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-orange-400 h-3 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-gray-700 font-semibold">{count}</div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-3 md:space-y-0">
          <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Search Order Food"
              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
              value={filterWeek}
              onChange={(e) => setFilterWeek(e.target.value)}
            >
              <option>This Week</option>
              <option>Last Week</option>
              <option>This Month</option>
            </select>
            <button className="text-orange-500 font-semibold text-sm hover:underline">See All Orders</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">Photo</th>
                <th className="py-3 px-4">Menu</th>
                <th className="py-3 px-4">Qty</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(
                ({ id, photo, menu, qty, amount, customer, status, statusColor }) => (
                  <tr key={id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-gray-900">{id}</td>
                    <td className="py-3 px-4">
                      <img
                        src={photo}
                        alt={menu}
                        className="w-12 h-12 object-cover rounded-md"
                        loading="lazy"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold">{menu}</div>
                      <div className="text-xs text-gray-500">{}</div>
                    </td>
                    <td className="py-3 px-4">{qty}</td>
                    <td className="py-3 px-4 text-orange-500 font-semibold">{amount}</td>
                    <td className="py-3 px-4">{customer}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
