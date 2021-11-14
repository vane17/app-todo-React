import React from 'react';
import {TodoProvider} from '../TodoContext';
import {AppUI} from './AppUi';


//import './App.css';

//Archivo con toda la logica del negocio

/* const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar curso intro react', completed: false},
  {text: 'Llorar con la llorono', completed: false},
] */
 
function App(props) {
//componentes envia props
//con esto todo lo que este en app Ui ya tiene propiedades sin necesidad de enmviarlo
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
