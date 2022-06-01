import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { Todo } from './Todo'


export const TodoList = () => {
 const {todoList,deleteTodo} = useContext(TodoContext)
 // console.log(todoList)
 
 
  return (
    <div>TodoList
    
      {todoList.map((el,i)=>(

       <Todo key={el.id} todo ={el}   deleteTodo={deleteTodo}/>
      )

       )}
     
    </div>
  );
};
