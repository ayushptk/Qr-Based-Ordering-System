import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'; // Your Redux store
import Header from './Header/header'; // Menu page header
import DishesSectionPage from './Dishessectionpage/DishesSectionpage'; // Main page for dishes
import Cart from './CartPage/Cart'; // Cart page
// import Categories from './Categories/categories'; // If you want a separate categories page or component
// import ChosesDishes from './ChosesDishes/chosesDishes'; // If this is a distinct page

// A layout component for the menu page
const MenuLayout = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        {/* Optional: Categories component could go here if it's part of the layout */}
        {/* <Categories /> */}
        <Outlet /> {/* Nested routes will render here */}
      </main>
      {/* You might have a footer specific to the menu page here */}
    </div>
  );
};

function MenupageApp() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MenuLayout />}>
          {/* Default route for menu page, e.g., showing all dishes */}
          <Route index element={<DishesSectionPage />} />
          <Route path="cart" element={<Cart />} />
          {/* Add other menu-related routes here, e.g., for specific categories or dish details */}
          {/* <Route path="categories/:categoryId" element={<DishesSectionPage />} /> */}
          {/* <Route path="choses-dishes" element={<ChosesDishes />} /> */}
        </Route>
      </Routes>
    </Provider>
  );
}

export default MenupageApp;