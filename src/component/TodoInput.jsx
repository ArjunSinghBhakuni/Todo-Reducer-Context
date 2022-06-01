import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

export const TodoInput = () => {

 const {setTodo,handleChange} = useContext(TodoContext)
  return (
    <div>TodoInput
     <input type="text" onChange={(e)=>setTodo(e.target.value)}  /> <button onClick={handleChange}>+</button>
    </div>
  )
}
