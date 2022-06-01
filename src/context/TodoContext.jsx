import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export const TodoContext = createContext();

export const TodoProvider = ({children})=>{
 const [todo,setTodo] = useState("");

 

 const [todoList,setTodoList] = useState([]);
 const handleChange =()=>{
//console.log(todo) 
setTodoList([...todoList,{
id:  uuidv4(),
value: todo}])
 }
 const deleteTodo =(id)=>{
 console.log(id  )
  let deletee = todoList.filter((el) =>
  (
    
  
   el.id!==id)
  )
  setTodoList(deletee)
 }

 return(

  <TodoContext.Provider value={{todo,setTodo,handleChange,todoList,setTodoList,deleteTodo}}>{children}</TodoContext.Provider>
 )
}