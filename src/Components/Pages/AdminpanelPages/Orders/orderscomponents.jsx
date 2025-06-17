import React from 'react';

const ordersData = [
  {
    id: 1,
    title: 'Table 1',
    type: 'Dine In',
    timeAgo: '11 mins ago',
    items: [
      { name: 'Iced Latte', quantity: 1 },
      { name: 'Chicken Pizza - Large', quantity: 1 },
    ],
    dishesCount: 2,
    price: 780,
  },
  {
    id: 2,
    title: 'Cabin 1',
    type: 'Dine In',
    timeAgo: '14 mins ago',
    items: [
      { name: 'Burger - Crunchy', quantity: 1 },
      { name: 'Burger - Crunchy', quantity: 1 },
      { name: 'Iced Latte', quantity: 1 },
    ],
    dishesCount: 3,
    price: 680,
  },
];

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 w-full max-w-sm ">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">{order.title}</h2>
          <span className="text-gray-900 font-semibold">{order.type}</span>
          <span className="text-green-500 font-semibold">{order.timeAgo}</span>
        </div>
        <ul className="mb-6 space-y-2">
          {order.items.map((item, index) => (
            <li key={index} className="flex justify-between items-center text-gray-700">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block"></span>
                <span>{item.name}</span>
              </div>
              <span>{item.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-gray-200 mb-4" />
      <div className="flex justify-between text-gray-700 font-semibold text-sm">
        <span>Dishes: {order.dishesCount}</span>
        <span>Rs {order.price}</span>
      </div>
    </div>
  );
};

const OrdersComponents = () => {
  return (
    <div className="flex flex-col md:flex-row  p-4 ms-[17rem] gap-4">
      {ordersData.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrdersComponents;
