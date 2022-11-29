import React from 'react'
import './HomeSection.css'
import '../../App.css';
import {Constants} from '../../Utils/ImportFile'
import Nav from '../../Shared/Navbar/Nav'
 
const HomeSection = () => {
  
  return (
    <div id='Home'>
      <Nav />
    <div className='empty-space'>
    </div>
    <div className='description-section'>
    <div className='content'>
        <div className='description-content'>
        <span>Hello, I'm</span>
       <div className='row-1'>      <div></div>
          <div></div></div>
       <div className='text-content'>
     
       <h1>Rajhi Sondes</h1>
       <h2>Creative Developer</h2>
     <div>
     <button>Contact</button>
     </div>
       </div>
       <div className='row-2'>      <div></div>
          <div></div></div>
        </div>
        <h1>Rajhi</h1>
      </div>
    
    </div>
    <div className='desc'>
     <h3 className='descript'> Je suis une développeuse web avec une vaste expérience depuis 2 ans.
Mon expertise est de créer et de concevoir des sites Web, des applications, des maquettes
et bien d’autres</h3>
<section class="section" id="about">
      <div class="container">
        <div class="about-pic">
          <img class="img" src="./sondesimg.jpg" alt="" />
        </div>
        <div class="about-content">
          <h2 class="section-title">About <span>me</span></h2>
          <h4 class="about-subtitle">Full-stack-developper</h4>
          <p class="about-subtitle"> J'ai obtenu une licence appliquée en technologie des réseaux et des télécommunications spécialisée en réseaux informatiques plus une certification de qualification en développement web.</p>
          </div>
      </div>
    </section>
    </div>
    <div class="citations">
    <h2 class="title-citations">Favorite <span>Quotes</span> </h2>
   
    <div class="container">
        <div class="box">
            <div class="icon"> 01 </div>
                <div class="content">
                    <h4 >
                        "Everything begin with an idea"
                       </h4>
                    <p>  Earl Nightingale</p>
               
            </div>
        </div>

        <div class="box">
            <div class="icon"> 02 </div>
                <div class="content">
                    <h4 >

                        "If you can dream it, you can do it"
                    </h4>
                    <p>Walt Disney</p>
               
            </div>
        </div>


        <div class="box">
            <div class="icon"> 03 </div>
                <div class="content">
                    <h4 >"A good laugh is sunshine in the house"</h4>
                    <p>
                        William Makepeace Thackeray
                    </p>
               
            </div>
        </div>


    </div>
    </div>
   
    <div class="citations">
             <h2 class="title-citations">project <sepan> 2022</sepan> </h2>
           
  <section class="all-project">
   <div class="pro">
   <pre> <div class="portfolio-items"><a href="#" class="item"><img className='imgProjet' src="./img7.jpg"  /></a> </div> <br></br>  <div class="portfolio-items"> <a href="#" class="item"><img className='imgProjet' src="./img8.jpg"  /></a></div></pre>
   
   <pre><div class="portfolio-items"><a href="#" class="item"><img className='imgProjet' src="./img2.jpeg"  /></a></div>    <div class="portfolio-items"><a href="#" class="item"><img className='imgProjet'src="./img5.jpeg"  /></a></div></pre>
   </div>
  </section>   
   <div>
    
   </div>
   </div>
    </div>
  )
}

export default HomeSection