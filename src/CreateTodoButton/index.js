import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props){

    //pero si la funcion lleva un parametro 

    const onClickButton = () => {
        /* props.setOpenModal(true); */
        props.setOpenModal(prevState => !prevState); /*devuelve la negacion del estado anterior */
    }
    return (
        <button className="CreateTodoButton"

        //onClick={()=> console.log('Clic')}>+</button>
        onClick={onClickButton}>+</button>
        
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