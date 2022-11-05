import React from 'react'

const Filter = (props) => {
    function onfilterchanged(event){
        //console.log(event.target.value);
        props.filterselected(event.target.value);
    }
  return (
    <div>
      <select  className='filter' name='isDone' onChange={onfilterchanged}>
        <option value='all'>ALL</option>
        <option value='done'>DONE</option>
        <option value='notdone'>NOT DONE</option>
      </select>
    </div>
  )
}

export default Filter
