import React from 'react'
import Navbar from './Components/Pages/HomePage/Navbar/navbar'
import Footer from './Components/Pages/HomePage/Footer/footer'

import Herosection from './Components/Pages/HomePage/Herosection/herosection'
import Featuressection from './Components/Pages/HomePage/whyoursection/features'
import OurServices from './Components/Pages/HomePage/OurServices/ourservices'
import Testimonials from './Components/Pages/HomePage/testomonials/Testimonials'
import ModalBox from './Components/Pages/HomePage/modalboxperfect/modalbox'
import FAQsection from './Components/Pages/HomePage/FAQ/faq'
import OurStory from './Components/Pages/HomePage/OurStory/story'

function HomeSection() {


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
      <Footer/>
   
    </div>
    
  
  )
}

export default HomeSection;
