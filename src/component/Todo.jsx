import React from 'react'

export const Todo = ({todo,deleteTodo,id}) => {
  return (
    <div>  
     {todo.value} <button onClick={()=>deleteTodo(todo.id)}>remove</button>
    

    </div>
  )
}
