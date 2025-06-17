
import HomeSection from "./Home"
import Loginpart from "./Components/Pages/HomePage/Login Page/Login"; // Corrected import for Loginpart
import AdminpanelApp, { AdminLayout } from "./Components/Pages/AdminpanelPages/AdminpanelApp"; // Corrected import path
import MenupageApp from "./Components/Pages/menupage/MenupageApp"; // Corrected import path
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TableSection from "./Components/Pages/AdminpanelPages/Tables/table";
import Cart from "./Components/Pages/menupage/CartPage/Cart";
import ChosesDishes from "./Components/Pages/menupage/ChosesDishes/chosesDishes";
import AdminDashboard from "./Components/Pages/AdminpanelPages/Dashboards/dashboard";
import NotificationPart from "./Components/Pages/AdminpanelPages/Notifications/notification";
import OrdersComponents from "./Components/Pages/AdminpanelPages/Orders/orderscomponents";

function App() {


  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/login" element={<Loginpart />} />
          <Route path="/adminpanel" element={<AdminpanelApp />} />
          <Route path="/createtable" element={
            <AdminLayout>
              <TableSection />
            </AdminLayout>
          } />
          <Route path="/dashboard" element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          } />
            <Route path="/notification" element={
            <AdminLayout>
          <NotificationPart />
            </AdminLayout>
          } />

           <Route path="/orders" element={
            <AdminLayout>
          <OrdersComponents />
            </AdminLayout>
          } />


          <Route path="/menupage" element={<MenupageApp />} />
          <Route path="/dishes" element={<ChosesDishes />} />
          <Route path="/cart" element={<Cart />} />
          
        </Routes>
      </Router>
     
   
    </div>
    
  
  )
}

export default App
