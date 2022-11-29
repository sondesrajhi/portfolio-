import React from 'react'
import './Nav.css'
import { Constants } from '../../Utils/ImportFile'
import { useAnimationFrame } from "framer-motion";
const Nav = () => {
  //Cube Animation
  const ref = React.useRef(null);
  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -3;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <nav>
      <div className='navLogo'>
        <div className="cube" ref={ref}>
          <div className="side front" />
          <div className="side left" />
          <div className="side right" />
          <div className="side top" />
          <div className="side bottom" />
          <div className="side back" />
        </div>
        <h1> <span>P</span>ortfolio</h1>
      </div>
       <ul>
        {Constants.NavLinks.map((el) => (
          <li key={el.id}><div className='linkAnim'></div> <spna>{el.linkName}</spna></li>
        ))}
      </ul> 
  
  <div className='responsive-Nav'>
  {Constants.NavLinks.map((el)=>(
  <li key={el.id}>log</li>
  ))}

  </div>

    </nav>

  )
}

export default Nav