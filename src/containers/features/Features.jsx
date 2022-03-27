import React from 'react'
import "./features.css"
import Feature from "../../components/feature/Feature"
const Features = () => {
  const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john the give of this new no matter what we will never give up on you"
  },
  {
    title: "Become the tended active",
    text: "From they fine john the give of this new no matter what we will never give up on you"
  },
  {
    title: "Message or am nothing",
    text: "Now or never that is the motto what we will never give up on you"
  },
  {
    title: "Really boy law county",
    text: "From they fine john the give of this new no matter what we will never give up on you"
  }
  ]
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The future is now and you just need to realize it. Step into the future today and make it happen.
        </h1>
        <p>Request early access to get started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map(({title, text}, index)=><Feature title={title} text={text} key={`${title}=${index}`}/>)}
      </div>
    </div>
  )
}

export default Features