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

const MenuLayout = () => {
  return (
    <div>
      
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
          {/* Default route for menu page, e.g., showing all dishes */}
          {/* <Route index element={<Categories />} />
          <Route index element={<ChosesDishes />} /> */}

          <Route path="/cart" element={<Cart />} />
          {/* Add other menu-related routes here, e.g., for specific categories or dish details */}
          {/* <Route path="categories/:categoryId" element={<DishesSectionPage />} /> */}
          {/* <Route path="choses-dishes" element={<ChosesDishes />} /> */}
        </Route>
      </Routes>
    </Provider>
  );
}

export default MenupageApp;