import React from 'react'
import { useState } from 'react';

function Tasklist() {
  const [value, setValue] = useState();
  const [todo, setTodo] = useState([]);
const handelClick = ()  =>{
  if (value !== "" || todo !== "") {
    setTodo([...todo, value]);
    setValue("");
  }
  
};

  return (
    <div className='text-center'>
      <h1 className=''>To Do List</h1>
<div>
<input onChange={e => setValue(e.target.value)} value={value}/>

<button class='btn btn-danger' onClick={handelClick}>Add Todo</button>
</div>
    </div>
  )
}

export default Tasklist