import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
        {/*Dos clases icon y icon-check*/ }
        {/*Si el componente recibe una propiedad que se llama complete  es decir true se agrega la clase 
        cion-check--acctive condifional si una entonces la otra &&
        */ }
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };