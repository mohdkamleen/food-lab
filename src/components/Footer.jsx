import React from 'react'
import '../css/components/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      {/* footer left side panel  */}
      <div className="left-footer">
        <img src="logo.png" alt="" />
        <p>123, abc road, xyz</p>
        <p><b>Phone :</b> +91 98765434567</p>
        <p><b>Email :</b> demo@gmail.com</p>
      </div>

      {/* footer right side panel  */}
      <div className="right-footer">
       <div className='footer-link'>
       <nav>
          <b>Useful Link</b>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Training Registration</a>
          <a href="#">Home</a>
          <a href="#">Services</a>
        </nav>
        <nav>
          &nbsp; 
          <a href="#">Support</a>
          <a href="#">Contact Us</a>
        </nav>
        <nav>
          <b>Site Map</b>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Training Registration</a>
          <a href="#">Home</a>
          <a href="#">Services</a>
        </nav>
       </div>
      <p>Food Labs Inc. © Copyright 2022. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer