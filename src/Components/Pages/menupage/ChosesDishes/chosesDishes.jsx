import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';
//import toast from 'react-hot-toast';
import { FaShoppingCart } from 'react-icons/fa';
import { div } from 'framer-motion/client';
import Header from '../Header/header';
import BelowMenu from '../BelowDashboard/belowmenu';

const dishes = [
  {
    id: 1,
    name: 'Chicken Momo',
    price: 180,
    image: '/Chickenmomo.png',
  },
  {
    id: 2,
    name: 'Mushroom sauce',
    price: 160,
    image: '/MushroomSauce.png',
  },
  {
    id: 3,
    name: 'Omelete Noodle',
    price: 160,
    image: '/OmeleteNoodle.png',
  },
  {
    id: 4,
    name: 'Chicken Noodle',
    price: 160,
    image: '/ChickenNoodle.png',
  },
  {
    id: 5,
    name: 'Katii Rool',
    price: 780,
    image: '/katirool.jpg',
  },
  {
    id: 6,
    name: 'Mushroom sauce',
    price: 160,
    image: '/Pizaaa.png',
  },
  {
    id: 7,
    name: 'Burger Crunchy',
    price: 250,
    image: '/BurgerCrunchy.png',
  },
];

const ChosesDishes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = (dish) => {
    dispatch(addToCart(dish));
    toast.success(
      <span className="flex items-center gap-2">
        <FaShoppingCart />
        {dish.name} added to the cart
      </span>,
      {
        position: 'bottom-right',
      }
    );
  };

  return (
    
     <div>
      
    <div className="max-w-[900px] mx-auto px-4 mt-6 bg-[#fff5f3] ">
     <Header />
      <div className="w-full max-w-[900px]">
        <h2 className="text-gray-800 text-lg font-semibold mb-4">Choose Dishes</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className=" rounded-lg border border-gray-300 p-3 flex flex-col items-center"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-20 h-20 xs:w-24 xs:h-24 object-cover rounded-full mb-3"
              />
              <div className="w-full text-left">
                <p className="text-gray-800 font-medium mb-1 !font-barlow">{dish.name}</p>
                <p className="text-red-500 text-sm mb-2">NPR {dish.price}</p>
                <button
                  type="button"
                  className="w-full bg-red-400 hover:bg-red-500 text-white text-xs font-semibold py-1 rounded"
                  onClick={() => handleAdd(dish)}
                >
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BelowMenu />
      <div className="mt-6">..</div>
    </div>
    </div>
  );
};
export default ChosesDishes;

