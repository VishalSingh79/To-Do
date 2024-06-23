import { createSlice,nanoid } from "@reduxjs/toolkit";
const loadState = () => {
    try {
      const serializedState = localStorage.getItem("todos");
      return serializedState ? JSON.parse(serializedState) : [];
    } catch (err) {
      console.error("Could not load state from local storage", err);
      return [];
    }
  };
  
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("todos", serializedState);
    } catch (err) {
      console.error("Could not save state to local storage", err);
    }
  };
  
  const initialState = {
    todos: loadState()
  };
  
// const initialState={
//     todos:[]
// }

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                completed:false,
                update:false,
            }
            state.todos.unshift(todo);
            saveState(state.todos);  
          
        },
        removeTodo:(state,action)=>{
             state.todos=state.todos.filter((todo)=> todo.id!==action.payload.id);
             saveState(state.todos);
        },
        completedTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) {
              todo.completed = !todo.completed;
              saveState(state.todos);
            }
          },
        updateTodo:(state,action)=>{
            {
                state.todos.map((todo)=>{
                    if(todo.id===action.payload.id)
                        todo.text=action.payload.text;
                        todo.update= false;
                        saveState(state.todos);
                   }
                )
                
            }
        },
        updationTodo:(state,action)=>{
            {
                state.todos.map((todo)=>{
                    
                    if(todo.id===action.payload.id)
                        todo.update= (!todo.update);
                    saveState(state.todos);
                   }
                )
            }
        }
    }
})

export const {addTodo,removeTodo,completedTodo,updateTodo,updationTodo}=todoSlice.actions;
export default todoSlice.reducer