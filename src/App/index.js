import React from 'react';
import {AppUI} from './AppUi';
//import './App.css';

//Archivo con toda la logica del negocio

/* const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar curso intro react', completed: false},
  {text: 'Llorar con la llorono', completed: false},
] */
 

function useLocalStorage(itemName, initialValue){
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue); //Lo que se manda por defecto inicialmente

  React.useEffect(()=> {
    setTimeout(()=> {

      try{
        //get metodo de localStorage permite guardar informacion 
        //parentesis elemento que llama SIEMPRE ES STRING
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

      
        if (!localStorageItem) {  //verifica si no hay nada en local estore (usuarios nuevos)
          //crea un por defecto lista TODOs
          localStorage.setItem(itemName, JSON.stringify(initialValue));  //setItem (elemtos, lo que guarda)
          //JSON.stringify([]) localstorage solo puede guardar string
          parsedItem = initialValue;


        } else { //ya tiene TODOS de versiones anteriores
          parsedItem = JSON.parse(localStorageItem) //lo cambia de string a un array
        }
        setLoading(false);
        setItem(parsedItem); //actualiza estado
      }
      catch(error){
        setError(error);
      }
    }, 1000);
  }, []); //array vacio para que se ejecute solo una vez


  


    //Funcion puente entre el local storage y compete y Deletetodo

  const saveItem = (newItem) => {

    try{
      const stringfiedItem = JSON.stringify(newItem); //Convierte en string a todos los todos
      localStorage.setItem(itemName, stringfiedItem);
      setItem(newItem); //para modificar el estado
    } catch (error) {
      setError(error);
    }
  };

  return { //llaves cuando se tienen mas de un estado no colocar corchetes
    item,
    saveItem,
    loading,
    error,

  };
}



//react fragment un componenete
function App(props) {
  const {
    item: todos, //renombra
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

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

    error={error}
    loading={loading}
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
