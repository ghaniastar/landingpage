import React from 'react';
import { useState } from 'react';

function NewTask() {
const [task, setTask] = useState("")
const [listData, setlistData] = useState([]);

function addTask(){
    // setlistData([...listData, task])
    // console.log(listData);
    setlistData((listData)=>{
        const updatedList = [...listData, task]
        console.log(updatedList)
        setTask('');
        return updatedList;
    })
}

  return (
    <div >
        <input type='text' placeholder='Add Task' value={task} onChange={(e)=> setTask(e.target.value)}></input>
        <button className='bg-success' onClick={addTask}>Add todo</button>
        
        {/* {listData !=[] && listData.map((data, i)=> */}
        {/* )} */}
        <button >Delete</button>
    </div>
  )
}

export default NewTask;