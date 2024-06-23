import React, { useState } from 'react'
import { addTodo } from '../redux/todo/todoSlice'
import {useDispatch} from 'react-redux'
function Todoform() {
    
   const [input,setInput]=useState('');
   const dispatch=useDispatch();
   function formHandler(event)
   {
       event.preventDefault();
       if(input.length>0){
       dispatch(addTodo(input));
       setInput('');
       }
       else{
        alert("Write a Task")
       }
   }

  return (
    <div className='todo-form'>
         <form onSubmit={formHandler} className='todoform-content'>
               <div> <input type='text' id='todo' name='todo'   placeholder='What would you like to do?' value={input} onChange={(e)=>setInput(e.target.value)} className='input-text'/></div>
                <div ><button className='addbtn' > Add Task</button></div>
         </form>
    </div>
  )
}

export default Todoform
