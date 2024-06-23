import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllTodo from "./components/AllTodo"
import Todoform from './components/Todoform'
function App() {
  

  return (

    <div className='main-container'>
     <div className='container'>
       <div className='container-item'>
        <Todoform/>
        <AllTodo/>
       </div>
     </div>
    </div>
  )
}

export default App
