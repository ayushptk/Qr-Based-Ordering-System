// import Features from "./whyoursection/features"
// import Herosection from "./Herosection/herosection"
// import Navbar from "./Navbar/navbar"
// import Featuressection from "./whyoursection/features"
// import OurServices from "./OurServices/ourservices"
// import Testimonials from "./testomonials/Testimonials"
// import ModalBox from "./modalboxperfect/modalbox"
// import { FaQ } from "react-icons/fa6"
// import FAQsection from "./FAQ/faq"
// import OurStory from "./OurStory/story"
// import Footer from "./footer/footer"

import HomeSection from "./Home"
import Loginpart from "./Components/Pages/HomePage/Login Page/Login"; // Corrected import for Loginpart
import AdminpanelApp from "./Components/Pages/AdminpanelPages/AdminpanelApp"; // Corrected import path
import MenupageApp from "./Components/Pages/menupage/MenupageApp"; // Corrected import path
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TableSection from "./Components/Pages/AdminpanelPages/Tables/table";
import Cart from "./Components/Pages/menupage/CartPage/Cart";
import ChosesDishes from "./Components/Pages/menupage/ChosesDishes/chosesDishes";

function App() {


  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/login" element={<Loginpart />} />
          <Route path="/adminpanel" element={<AdminpanelApp />} />
          <Route path="/menupage" element={<MenupageApp />} />
          <Route path="/dishes" element={<ChosesDishes />} />
          <Route path="/cart" element={<Cart />} />
          
        </Routes>
      </Router>
     
   
    </div>
    
  
  )
}

export default App
