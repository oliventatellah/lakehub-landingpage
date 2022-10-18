import React from "react"
import "./intro.css"
import Image from "../img/lakehub2.png"
import Image1 from "../img/lakehub.png"
import Image2 from "../img/patner1.png"
import Image3 from "../img/patner2.png"
import Image4 from "../img/patner5.png"
import Image5 from "../img/patner6.png"
import Image6 from "../img/patner8.png"
import Image7 from "../img/patner4.png"
import Image8 from "../img/patner11.png"
import Image9 from "../img/patner13.png"
import Image10 from "../img/inovation.png"
import Image12 from "../img/hackathon.png"
import Image13 from "../img/lakehub-pro.jpg"

import {FaFacebook,FaGithub,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa';






const Intro =() =>{
  return ( 
  <div>
      <div className="alert alert-info alert-dismissible" role="alert">
       <button aria-label="Close" class="close" data-dismiss="alert" type="button"><span aria-hidden="true">×</span></button>
       <p>FemiDevs is back! We're supporting girls and young women on digital skills. <a href="/" target="_blank">Learn More</a>.</p>
   </div>
   <div class="profile">
        <div className="sub-profile1">
         <img src={Image1} alt="logo"/>
         <h2>we're decentralizing <br></br><span>access to technology</span></h2>
         <p className="pro">LakeHub is a growing community of creatives, programmers, hackers, designers & entrepreneurs. We learn, share, collaborate and have fun everyday.</p>
         <div className="button">
           <button className="get">Get started</button>
           <button className="get1">Join our community</button>
        </div>
       </div>
        <div className="img1">
         <img src={Image} alt="logo" height="400px"/>
       </div>
  
   </div>
   <div className="developers">
            <h2 className="get3">Trusted by Entrepreneurs & Developers.</h2>
            <div className="gigs">
              <div>
               <h2 className="get4">1000+</h2>
               <p className="get5">Entrepreneurs supported</p>
             </div>
             <div>
               <h2 className="get4">10</h2>
               <p className="get5">Startups Launched</p>
             </div>
             <div>
               <h2 className="get4">150+</h2>
               <p className="get5">Software Developers</p>
             </div>
         </div>
        </div>
        <div className="patners">
          <h4 className="get6">Our Partners</h4>
          <div className="patners1">
            <tr>
             <td><img src={Image2} alt="logo" /></td>
             <td><img src={Image3} alt="logo" /> </td>
           </tr>
           <tr>
           <td><img src={Image4} alt="logo" /></td>
           <td><img src={Image5} alt="logo" /></td>
           <td><img src={Image6} alt="logo" /></td>
           </tr>
           <tr>
           <td><img src={Image7} alt="logo" /></td>
           <td><img src={Image8} alt="logo" /></td>
           <td><img src={Image9} alt="logo" /></td>
           </tr>
          </div>
          <div className="inovation">
            <img src={Image10} alt="logo" />
            <h4 className="get7">the lake basin investment & <br></br><span>
            innovation week (LBIIW)</span></h4>
            <p className="get8">LakeHub, Winam Capital & Fablab Winam convenes the
             LBIIW is an annual entrepreneurship and innovation gathering that convenes 
             entrepreneurs, innovators, investors, policymakers, government, development 
             agencies and other ecosystem players; to spur economic growth of the Lake Victoria 
             Basin, through innovative business models, digitization, SME financing and local
              manufacturing.
           </p>
           <button className="inov">patner with us</button> <a href="/">learn More</a>
           </div>
         </div>

          <div className="events">
           <h1>Upcoming Events</h1>
           <div className="card">
              <div className="event2">
                <img src={Image12} alt="logo"  width="570px" height="200px" />
             </div>
              <div className="event3">
               <h5>Event</h5>
               <h3>Design Hackathon: 14th - 18th Sep, 2021</h3>
               <p>LakeHub in partnership with Garage48 is bringing a 5-day design hackathon<br></br>
               from the 14-18th September to empower the local talents in digital design<br></br>
               and prototyping skills! The program is organized in
               collaboration and with<br></br> the financing of the Estonia
               Ministry of Foreign Affairs Development<br></br> Cooperation.</p>
             </div>
              <div className="event4">
               <img src={Image13} alt="logo"   width="70px" height="70px"></img>
               <h5 className="olive"> olivent atellah <br></br><span>Aug 32, 2021</span></h5>
               </div>
            </div>
        </div>
           <footer >
             <div className="contact">
             <img className="lakehub-12" src={Image1}  alt="logo"/>
               <p>Lakehub is a growing community of creative <br></br>programmers, hackers,designers & entrepreneurs</p>
               <p>we learn, share, collaborate and have fun everyday</p>
             </div>

             <hr></hr>

             <div className="contact1">
               <p>@ Copyright 2021 Lakehub. All rights reserved </p>
              
                <div className="account-main">
                  <a href="https://github.com/oliventatellah "className="account1">
                    <FaGithub className='yellow'></FaGithub></a>
                  <a href="https://wwww.facebook.com/olivent.awuor.9"className="account1">
                    <FaFacebook className='yellow'></FaFacebook></a>
                  <a href="https://www.instagram.com/oliray_o/"className="account1">
                    <FaInstagram className='yellow'></FaInstagram></a>
                  <a href="https://www.linkedin.com/in/olivent-awuor-830bb1142/"className="account1">
                    <FaLinkedin className='yellow'></FaLinkedin></a>
                    <a href="https://twitter.com/oliventatellah"className="account1">
                    <FaTwitter className='yellow'></FaTwitter></a>
                </div>
              </div>
         </footer>
</div>
  
)
  
  }

export default Intro;