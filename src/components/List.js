import React from 'react';


const List = ({todos,setTodos,seteditlist}) => {
    const handleDelete = ({id})=>{
        setTodos(todos.filter((todo)=> todo.id !==id));
    };
    
    const handlechange = ({id})=>{
      const check = todos.map((todo)=>{
        if(todo.id ===id){
          todo.completed = !(todo.completed);
          return todo;

        }
        return todo;
        
      })
      setTodos(check);
        //console.log(check)
      //console.log(check);
    };
    const handleEdit = ({id})=>{
      const findtodo = todos.find((todo)=> todo.id === id);
      seteditlist(findtodo);
    };
  return (
    <div>
      {todos.map((todo)=>(
        <li className='todolist' key={todo.id}>
            <input className='list' type='text' value={todo.title} onChange={(event)=>event.preventDefault()}></input>
            <input className='check' type='checkbox' value='Done' onChange={()=> handlechange(todo)}/>
            <button className='edit' onClick={()=> handleEdit(todo)} ><b>EDIT</b></button>
            <button className='delete'onClick={()=> handleDelete(todo)}><b>DELETE</b></button>
        </li>
      ))}
    </div>
  )
}

export default List
