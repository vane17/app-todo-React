import React from 'react';
import {TodoCounter}  from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoItem} from './TodoItem';
//import './App.css';

const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar curso intro react', completed: false},
  {text: 'Llorar con la llorono', completed: false},
]



//react fragment un componenete
function App(props) {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');


  const completedTodos = todos.filter( todo => todo.completed == true).length; //cuantos todos se han marcado como completados
  const totalTodos = todos.length; //en totalTodos

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else { 

    searchedTodos = todos.filter( todo => {
      const todoText = todo.text.toLowerCase(); // se convierte a minuscula para analizarlo
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText); //filtra a cuales de todos incluye el text que escribimos en nuestro input de busqueda
    })
    
  }

  const completeTodo = (text) => { 
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]; //saca un mnuevo array para hacer las modificaciones al nuevo
    newTodos[todoIndex].completed = true;
    setTodos (newTodos); //actualizar estados
  };

  const deleteTodo = (text) => { 
    const todoIndex = todos.findIndex(todo => todo.text === text);//metodo listas encontrar index
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1 ); //sacar rebana de tajada(saca el elemento de esa posicion y solo 1 elemnto )
    setTodos (newTodos); //actualizar estados
  };


  return (
    <React.Fragment>

      <TodoCounter 
        total = {totalTodos}
        completed = {completedTodos}/>

      <TodoSearch 
        searchValue = {searchValue} 
        setSearchValue = {setSearchValue}/>

      {/*Colocar atri Key un identificador unico que no se repita solo para cuando rendericen listas*/ }
      <TodoList/>
        {searchedTodos.map(todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}/>
        ))}
      <TodoList/>

      <CreateTodoButton/>
        

    </React.Fragment>
  );
}

export default App;
