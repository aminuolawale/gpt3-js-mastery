import React from 'react'
import "./possibility.css"
import possibilityImage from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possiblity"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early access to get started</h4>
        <h1 className="gradient__text"> The possibilities are beyond your imagination</h1>
        <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles</p>
        <h4>Request Early access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility