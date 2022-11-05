import React,{useEffect} from 'react';

var i = 0;
const Task = ({ input, setInput, todos, setTodos, editlist, seteditlist }) => {
  const updatetodo = (title,id,completed)=>{
    const newtodo = todos.map((todo)=>
      todo.id === id ? {title,id,completed} : todo
    );
    setTodos(newtodo);
    seteditlist("");
  }
  useEffect(()=>{
    if(editlist){
      setInput(editlist.title);
    }else{
      setInput("");
    }
  },[setInput,editlist]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editlist) {
      setTodos([...todos, { id: i++, title: input, completed: false }]);
      setInput("");
    }else{
      updatetodo(input,editlist.id,editlist.completed);
    }

  };
  return (
    <form onSubmit={onFormSubmit}>
      <input className='items' placeholder='Things to do..' type='text' value={input} required onChange={onInputChange}></input>
      <button className='btn' type='submit'><i>ADD</i></button>
    </form>
  );
}

export default Task;
