 
import './Logo.css';
import * as React from "react";
import { motion } from "framer-motion";
 import { Constants } from '../../Utils/ImportFile';
const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};
function Logo() {
   
 
  return (
    <div className="logoContainer">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="item"
    >
      <motion.path  
        d={`${Constants.LOGO_SVG_PATH}`}
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
  </div>
  );
}

export default Logo;
