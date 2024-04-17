import React from 'react'
function Price({oldPrices,newPrices}) {
  return (
    <>
    <span>{oldPrices}</span>
    &nbsp;&nbsp;
    <span>{newPrices}</span>
    </>
  )
}

export default Price