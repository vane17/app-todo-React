import React from 'react';
import {AppUI} from './AppUi';
//import './App.css';

//Archivo con toda la logica del negocio

/* const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar curso intro react', completed: false},
  {text: 'Llorar con la llorono', completed: false},
] */
 


//react fragment un componenete
function App(props) {

  //get metodo de localStorage permite guardar informacion 
  //parentesis elemento que llama SIEMPRE ES STRING
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {  //verifica si no hay nada en local estore (usuarios nuevos)
    //crea un por defecto lista TODOs
    localStorage.setItem('TODOS_V1', JSON.stringify([]));  //setItem (elemtos, lo que guarda)
    //JSON.stringify([]) localstorage solo puede guardar string
    parsedTodos = []


  } else { //ya tiene TODOS de versiones anteriores
    parsedTodos = JSON.parse(localStorageTodos) //lo cambia de string a un array
  }



  const [todos, setTodos] = React.useState(parsedTodos); //Lo que se manda por defecto inicialmente
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

//Funcion puente entre el local storage y compete y Deletetodo

const saveTodos = (newTodos) => {
  const stringfiedTodos = JSON.stringify(newTodos); //Convierte en string a todos los todos
  localStorage.setItem('TODOS_V1', stringfiedTodos);
  setTodos(newTodos); //para modificar el estado
}





  const completeTodo = (text) => { 
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]; //saca un mnuevo array para hacer las modificaciones al nuevo
    newTodos[todoIndex].completed = true;
    saveTodos (newTodos); //actualizar estados
  };

  const deleteTodo = (text) => { 
    const todoIndex = todos.findIndex(todo => todo.text === text);//metodo listas encontrar index
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1 ); //sacar rebana de tajada(saca el elemento de esa posicion y solo 1 elemnto )
    saveTodos (newTodos); //actualizar estados
  };

//componentes envia props
  return (
    <AppUI
    totalTodos = {totalTodos}
    completedTodos = {completedTodos}
    searchValue = {searchValue} 
    setSearchValue = {setSearchValue}
    searchedTodos = {searchedTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    
    />
  );
}

export default App;
