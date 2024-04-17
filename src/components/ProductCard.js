import React from 'react'
import Product from './Product'

function ProductCard() {
 
  
  return (
    <div>

       <Product title='Apple'  idx={0}/>
       <Product title='Samsung'  idx={1}/>
       <Product title='vivo'  idx={2}/>
       <Product title='techno'  idx={3}/>
</div>

    
  )
}

export default ProductCard