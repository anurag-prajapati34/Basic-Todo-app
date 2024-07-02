import React from 'react';
import './ToDo.css';

export default function AddButton({addTask}) {
  return (
   <button className='addBtn' onClick={addTask}>ADD</button>
  )
}
