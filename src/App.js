import './App.css';
import Task from './components/Task';
import { useState } from 'react';
import List from './components/List';
import Filter from './components/Filter';
//import Search from './components/Search';

function App() {
  const [input , setInput] = useState("");
  const [todos , setTodos] = useState([]);
  const [filterlist, setfilterlist] = useState("all");
  const [editlist,seteditlist] = useState(null);

  let filteredlist = todos.filter((task)=>{
    if(filterlist === 'done'){
      return task.completed === true;
    }
    else if (filterlist ==='notdone') {
      return task.completed === false;
    } else {
      return task;
    }
  })
  
  console.log(todos);
  function onfilterselected(filter){
    setfilterlist(filter);
  }
  return (
    <div className="App">
      <div className="content">
        <h1 className='title'><i>TO-DO LIST:</i></h1>
        <div>
          <Task
          input = {input}
          setInput = {setInput}
          todos = {todos}
          setTodos ={setTodos}
          editlist={editlist}
          seteditlist={seteditlist}/>
        </div>
        <div className='filter'>
          <Filter filterselected={onfilterselected}/>
        </div>
        <div>
          <List todos={filteredlist} setTodos={setTodos} seteditlist={seteditlist}/>
        </div>
        {/*<div>
          <Search todos = {todos}
          setTodos ={setTodos}
          />
  </div>*/}
      </div>
    </div>
  );
}

export default App;
