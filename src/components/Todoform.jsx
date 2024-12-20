import React, { useState } from 'react'
import { addTodo ,setSearchTask } from '../redux/todo/todoSlice'
import {useDispatch} from 'react-redux'
function Todoform() {
    
   const [input,setInput]=useState('');
  //const [searchTodo,setSearchTodo]=useState('');
   const dispatch=useDispatch();
   function formHandler(event)
   {
       event.preventDefault();
       if(input.length>0){
       dispatch(addTodo(input.trim()));
       setInput('');
       }
       else{
        alert("Write a Task")
       }
   }
   function searchTaskHandeler(event){
    event.preventDefault();
    dispatch(setSearchTask(input.trim()));
    setInput('');
   }
   
  return (
    <div className='todo-form'>
         <form onSubmit={formHandler} className='todoform-content'>
               <div> <input type='text' id='todo' name='todo'   placeholder='What would you like to do?' value={input} onChange={(e)=>setInput(e.target.value)} className='input-text'/></div>
                <div className='btnsTask'>
                <button className='addbtn' onClick={formHandler}> Add Task</button>
                <button className='searchbtn' onClick={searchTaskHandeler}>Search Task</button>
                </div>
         </form>
    </div>
  )
}

export default Todoform
