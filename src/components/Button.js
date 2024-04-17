import React from 'react'
function doSomething() {
    console.log(123);

}
function Button() {
  return (
    <div>
        <button onClick={doSomething}>Click Me</button>
        <p onMouseOver={}></p>
    </div>
  )
}

export default Button