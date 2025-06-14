import Features from "./whyoursection/features"
import Herosection from "./Herosection/herosection"
import Navbar from "./Navbar/navbar"
import Featuressection from "./whyoursection/features"
import OurServices from "./OurServices/ourservices"
import Testimonials from "./testomonials/Testimonials"
import ModalBox from "./modalboxperfect/modalbox"
import { FaQ } from "react-icons/fa6"
import FAQsection from "./FAQ/faq"
import OurStory from "./OurStory/story"
import Footer from "./footer/footer"
import Loginpart from "./Login Page/Login"
import HomeSection from "./Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/login" element={<Loginpart />} />
        </Routes>
      </Router>
     
   
    </div>
    
  
  )
}

export default App
