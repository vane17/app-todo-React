import React from 'react';

function TodoCounter(){

    return (
        <h2>Has Completado 2 de 3 TODOs</h2>
    );
};




//varias opciones de exportar

/*export default TodoCounter;
import patito from './TodoCounter'; // se le puede poner cualquier nombre problema*/

export  {TodoCounter}; // se obliga a que se usen exactamente el mismo nombre

