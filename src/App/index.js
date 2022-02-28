import React from 'react';
import {TodoProvider} from '../TodoContext';
import {AppUI} from './AppUi';

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
  
}

export { App };




/* const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar curso intro react', completed: false},
  {text: 'Llorar con la llorono', completed: false},
] */