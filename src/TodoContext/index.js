import React from 'react';
import {useLocalStorage} from './useLocalStorage';


//propiedades
const TodoContext = React.createContext(); //Herramienta react que permite crear propiedades a los componente

//<TodoContext.Provider></TodoContext.Provider> SE UTILIZA PARA NEVOLVER TODA LA APP
//<TodoContext.Consumer></TodoContext.Consumer> En las partes que se necesite informacion del estado compatido


function TodoProvider(props) {
//<TodoContext.Provider> para cualquier componenete que llame todoProvider va a poder llamar a todo consumer
//doble llave porque es un objeto, value son llo que se va a compartir a todas partes


    //react fragment un componenete

    const {
      item: todos, //renombra
      saveItem: saveTodos,
      loading,
      error,
    } = useLocalStorage('TODOS_V1', []);
  
    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);
  
  
    const completedTodos = todos.filter( todo => todo.completed == true).length; //nuevo array con los todos completados
    const totalTodos = todos.length; 
  

    //filtar todos en el input 
    let searchedTodos = [];
  //que no sea mayor a 1 
    if (!searchValue.length >= 1){
      searchedTodos = todos; //muestra todos los todos
    } else { //si ya escribieron algo en el imput aunque sea una letra
  
      searchedTodos = todos.filter( todo => {
        const todoText = todo.text.toLowerCase(); // se convierte a minuscula para analizarlo
        const searchText = searchValue.toLowerCase();
  
        //metodo includes de los strings
        return todoText.includes(searchText); //filtra a cuales de todos incluye el text que escribimos en nuestro input de busqueda
      })
      
    }
  
  
  
    const completeTodo = (text) => { 
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos]; //saca un nuevo array para hacer las modificaciones al nuevo
      newTodos[todoIndex].completed = true;
      saveTodos (newTodos); //actualizar estados
    };


    const addTodo = (text) => { 
      const newTodos = [...todos]; //saca un mnuevo array para hacer las modificaciones al nuevo
      newTodos.push({
        completed: false,
        text,
      });
      saveTodos (newTodos); //actualizar estados
    };
  
  
    const deleteTodo = (text) => { 
      const todoIndex = todos.findIndex(todo => todo.text === text);//metodo listas encontrar index
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1 ); //sacar rebana de tajada(saca el elemento de esa posicion y solo 1 elemnto )
      saveTodos (newTodos); //actualizar estados
    };

    

// propiedades que se van a compartir a todos los componenetes de la app
    return (
        <TodoContext.Provider value ={{
            error ,
            loading ,
            totalTodos ,
            completedTodos ,
            searchValue , 
            setSearchValue ,
            searchedTodos ,
            completeTodo ,
            addTodo,
            deleteTodo ,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider};