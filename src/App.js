import './App.css';
import {Logo,Constants} from './Utils/ImportFile';
import React from 'react';
import HomeSection from './Components/HomeSection/HomeSection';
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();


  React.useEffect(()=>{
     
    setTimeout(()=>{
      document.getElementsByClassName('logoContainer')[0].setAttribute('style','display:none')
    },2500)
  })
  
  return (
     <>
          <motion.div
        className="progress-bar"d
        style={{ scaleX: scrollYProgress }}
      />
     <Logo />



     <HomeSection />

     </>
  );
}

export default App;
