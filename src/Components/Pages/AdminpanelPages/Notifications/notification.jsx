import React, { useState } from 'react';

const notificationsData = [
  {
    id: 1,
    status: 'New',
    title: 'Order request from digital menu',
    description: 'Order request for Table Cabin 1',
    time: '09:22 AM',
    date: '06-17-2025',
  },
  {
    id: 2,
    status: 'New',
    title: 'Order request from digital menu',
    description: 'Order request for Table Cabin 1',
    time: '09:21 AM',
    date: '06-17-2025',
  },
];

const NotificationPart = () => {
  const [activeTab, setActiveTab] = useState('order');

  return (
    <div className="p-4 max-w-[400px] ms-[17rem] p-8">
      <h1 className="text-2xl font-semibold mb-4">Notification</h1>

    

      {/* Content */}
      {activeTab === 'order' && (
        <>
          <h2 className="text-lg font-semibold mb-4">Today</h2>
          <div className="space-y-4">
            {notificationsData.map((notification) => (
              <div
                key={notification.id}
                className="border border-gray-300 rounded-lg p-4"
              >
                <div className="flex items-center space-x-2 mb-1">
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                    {notification.status}
                  </span>
                  <h3 className="font-semibold text-gray-900">
                    {notification.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm mb-1">
                  {notification.description}
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  at {notification.time}/{notification.date}
                </p>
                
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="flex items-center justify-center space-x-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Accept Order</span>
                  </button>
                  <button
                    type="button"
                    className="bg-red-100 hover:bg-red-200 text-red-700 font-semibold px-4 py-2 rounded-md transition-colors duration-200"
                  >
                    Reject it!
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'activity' && (
        <div className="text-gray-500 italic">No activity notifications yet.</div>
      )}
    </div>
  );
};

export default NotificationPart;
