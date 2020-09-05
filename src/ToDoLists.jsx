import React from 'react'
const ToDoLists= (props) => {
  
return(
    <>
    <div class="todo_style">
       <div class="remove" onClick={() =>{
            props.onSelect(props.id);
        }}>Remove<i class="fa fa-times"/></div> 
    <li>{props.text}</li>
    </div>
    </>
);
};
export default ToDoLists;