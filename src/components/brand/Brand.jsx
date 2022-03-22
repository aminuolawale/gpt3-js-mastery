import React from 'react'
import brandList from './imports'
import "./brand.css"



const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      {brandList.map(brand=><div>
        <img src={brand} alt="google"/>
      </div> )}
      
    </div>
  )
}

export default Brand