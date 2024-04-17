import React from 'react'
import Price from './Price'

const Product = (props) => {

    let oldPrices= [12.99, 45.98, 56.87, 30]
    let newPrices=[45.0, 67.4, 34.6, 50]
    let description=[["apple","buttons"],
    ["ipad","ipad pro"],["wireless","surface"],
    ["laptop","lenovo"]];
  const  {title,idx}=props;
  return (
    <div>
  <div class="card ">
    <div class="card-body ">
        <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
<Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/>

    </div>
  </div>
  
    </div>
  )
}

export default Product