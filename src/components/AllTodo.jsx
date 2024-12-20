import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo,completedTodo,updateTodo,updationTodo} from '../redux/todo/todoSlice'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function AllTodo() {
   const [completed,setCompleted]=useState(false);
   
    const [input,setInput]=useState('');
    let todos=useSelector(state=>state.todos);
    const searchingTask = useSelector(state=>state.searchTask);
    const dispatch=useDispatch();
   
    todos =searchingTask ? todos.filter(todo =>
      todo.text.toLowerCase().includes(searchingTask.toLowerCase())
    ):
    todos
    ;
    





    function completeHandler(todo) {
      dispatch(completedTodo(todo));
    }
    function updateHandler(id,input)
    {
      if(input.length>0){
      dispatch(updateTodo({id:id,text:input}));
      setInput('');
      }
      else
      alert("Write a Task")
    }
    function updationTodohandler(todo)
    {
      dispatch(updationTodo(todo));
    }
    function handleEditClick(todo) {
      setInput(todo.text); 
      updationTodohandler(todo);
    }
  
  return (
    <div className='todo-data'>
      
      <div className='todo-head'> Todo List</div>
      <div className='todo-tag'>
        <p className='first-tag'>List</p>
        <p>Status</p>
        <p>Edit</p>
        <p>Delete</p>
      </div>
      
      <div className='todo-content'>
        {
          todos.length>0 ?
            todos.map((todo)=>(
                <p key={todo.id} className='task-detail-info'>
                 
                {
                  todo.update ?
                  <div className='task-edit-info'>
                   <div> 
                      <input type='text'  id='todo' name='todo' autoFocus  onChange={(e)=>setInput(e.target.value)} value={input} className='update-text'/> 
                   </div>
                   <div  onClick={()=>updateHandler(todo.id,input)} className='save-todo'>
                      Save
                   </div>
                  </div>
                  :
                 <div className='task-detail'  style={{
                  backgroundColor: todo.completed ? '#9BEC00' : 'white',
                 
                }}>
                  <div className='task-text' style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}> {todo.text}</div>
              
                  <div
                  className='task-status'
                  onClick={() => completeHandler(todo)}
                  style={{       
                    
                    backgroundColor: todo.completed ? 'green' : 'rgb(154,193,189)',
                    borderRadius: '5px',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
               
                  {todo.completed ? 'Completed' : 'Pending'}
                </div>
                  <div className='task-edit'  onClick={() => handleEditClick(todo)}>
                        <FaRegEdit style={{color:"green",fontSize:'larger'}}/>
                  </div>
                  <div className='task-delete' onClick={()=>dispatch(removeTodo(todo))}>
                        <MdDelete style={{color:"red",fontSize:'larger'}}/>
                  </div>
                  </div>
                }
               
                
                </p>
                
            ))
            :
            <p>No Tasks</p>
        }
      </div>
    </div>
  )
}

export default AllTodo
