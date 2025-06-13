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


function App() {


  return (
    <div >
      <Navbar />
      <Herosection />
      <Featuressection />
      <OurServices />
      <Testimonials />
      <ModalBox />
      <FAQsection/>
      <OurStory />
    </div>
    
  
  )
}

export default App
