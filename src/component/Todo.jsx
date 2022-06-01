import React from 'react'

export const Todo = ({ text, clickToToggle,id, deleteTodo, complete }) => {
  return (
   <div >
   <span
     
     style={{ color: complete ? "green" : "red" }}
   >
     {text}
   </span>
   <div>
     <button   onClick={clickToToggle}>
       TOGGLE
     </button>
     <button   onClick={() => deleteTodo( id)}>
       DELETE
     </button>
   </div>
 </div>
  )
}
