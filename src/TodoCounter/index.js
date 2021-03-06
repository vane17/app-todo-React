import React from 'react';
import './TodoCounter.css'; //esto gracias a create-react-app 
import {TodoContext} from '../TodoContext';
//CON CONTEXT

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <> 
            <h1 className="TodoCounter__title">YOUR TASKS</h1>
            <h2 className="TodoCounter">Completed <div className="TodoCounter__number">{completedTodos}</div> to <div className="TodoCounter__number">{totalTodos}</div> tasks</h2>
        </>
    );
};


export  {TodoCounter};

//ANTES SIN CONTEXT
/* //Importante dos llaves
function TodoCounter({total, completed }){
    // otra forma const {total, completed } = props; todoCounter(props)
    return (
        <h2 className="TodoCounter">Has Completado {completed} de {total} TODOs</h2>
    );
}; */





/*trabajando estios en linea:

const estilos = {
    color: 'red', 
    backgroundColor: 'yellow'
};

//Importante dos llaves
function TodoCounter(){

    return (
        <h2 style = {estilos}>Has Completado 2 de 3 TODOs</h2>
    );
};


------------------------------------------------------------------------------------------------
//Importante dos llaves
function TodoCounter(){

    return (
        <h2 style = {{
        color: 'red', 
        backgroundColor: 'yellow'
        }}>Has Completado 2 de 3 TODOs</h2>
    );
};



//varias opciones de exportar

/*export default TodoCounter;
import patito from './TodoCounter'; // se le puede poner cualquier nombre problema*/

 // se obliga a que se usen exactamente el mismo nombre

