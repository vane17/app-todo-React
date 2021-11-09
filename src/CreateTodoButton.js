import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props){

    //pero si la funcion lleva un parametro 

    const onClickButton = (msg) => {
        alert(msg)
    }
    return (
        <button className="CreateTodoButton"

        //onClick={()=> console.log('Clic')}>+</button>
        onClick={()=> onClickButton('Hay en envolver la funcion dentro de funcion')}>+</button>
        
    );

};

export  {CreateTodoButton}; 










/* const onClickButton = () => {
    alert('Aqui se deberia abrir el modal')
}
return (
    <button className="CreateTodoButton"

    //onClick={()=> console.log('Clic')}>+</button>
    onClick={onClickButton}>+</button>
    
);
 */