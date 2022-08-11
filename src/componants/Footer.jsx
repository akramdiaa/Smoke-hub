import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Footer.css';


function Footer() {
  return (

    <div className='footer-container'>
    <div className='footer-links'>
      <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
          <h2>Contact Us</h2>
          <h5 style={{color:'white'}}>01010565736</h5>
          <h5 style={{color:'white'}}>akrm.diaa1200@gmail.com</h5>
        </div>

      </div>
      <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
          <h2>Social Media</h2>
          <Link to='/'>Instagram</Link>
          <Link to='/'>Facebook</Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Footer;
