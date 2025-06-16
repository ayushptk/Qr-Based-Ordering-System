import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'; // Your Redux store
import Header from './Header/header'; // Menu page header
import DishesSectionPage from './Dishessectionpage/DishesSectionpage'; // Main page for dishes
import Cart from './CartPage/Cart'; // Cart page
import Categories from './Categories/categories';
import ChosesDishes from './ChosesDishes/chosesDishes';
import BelowMenu from './BelowDashboard/belowmenu';
import { Toaster } from 'react-hot-toast';

const MenuLayout = () => {
  return (
    <div className='bg-[#FFF5F3]'>
      <Toaster />
      <Header />
      <Categories />
      <ChosesDishes />
      <BelowMenu />
    </div>
  );
};

function MenupageApp() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MenuLayout />}>
        </Route>
      </Routes>
    </Provider>
  );
}

export default MenupageApp;
