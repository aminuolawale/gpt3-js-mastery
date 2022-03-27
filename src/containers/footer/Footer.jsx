import React from 'react'
import "./footer.css"
import gpt3Logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future before others</h1>
        <div className="gpt3__footer-btn">
          <p>Request early access</p>
        </div>
      </div>
      <div className='gpt3__footer-links'>
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3 logo"/>
          <p>Crechterwood K12 182 DK. All rights reserved.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms and conditions</p>
          <p>Privacy policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Get in</p>
          <p>right now</p>
          <p>I'm not kidding</p>
        </div>
      </div>
      <div className='gpt3__footer-copywright'>
        <p>&copy; 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer