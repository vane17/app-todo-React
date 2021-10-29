import React from 'react';
import {TodoCounter}  from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoItem} from './TodoItem';
//import './App.css';

const todos = [
  {text: 'Cortar Cebolla', completed: false},
  {text: 'Tomar curso intro react', completed: false},
  {text: 'Llorar con la llorono', completed: false},
]



//react fragment un componenete
function App(props) {
  return (
    <React.Fragment>

      <TodoCounter/>

      <TodoSearch/>

      {/*Colocar atri Key un identificador unico que no se repita solo para cuando rendericen listas*/ }
      <TodoList/>
        {todos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      <TodoList/>

      <CreateTodoButton/>
        

    </React.Fragment>
  );
}

export default App;
