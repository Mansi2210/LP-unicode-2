import React, { useState } from 'react';

const Search = ({ todos, setTodos }) => {
  const [search, setsearch] = useState('');

  const onsearchinput = (e) => {
    setsearch(e.target.value);
  }

  return (
    <div>
      <form>
        <input className='items' placeholder='Search..' type='text' value={search} onChange={onsearchinput}></input>
        <button className='btn' type='submit' ><i>FIND</i></button>
      </form>
      {todos.filter((val) => {
        if (search === '') {
          return val;
        } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
          return val;
        }
      })}
    </div>
  )
}

export default Search
