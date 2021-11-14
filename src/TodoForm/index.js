import React from 'react';
import {TodoContext} from '../TodoContext';
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewValue] = React.useState('')

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)


    const onChange = (event) => {
        setNewValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onAdd = (event) => {

        event.preventDefault();//metodo por defecto ayuda a que el formulario se envie no recargue pagina
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    return (
        <form onSubmit={onAdd}>
            <label>Escribe tu nuevo To Do</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Cortar cebolla para el almuerzo"
            className=""/>
            <div className="TodoForm-buttonContainer">
                <button onClick={onCancel} type="button" className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
                <button  type="submit"  className="TodoForm-button TodoForm-button--add">Anadir</button>


            </div>
        </form>
    )
}

export {TodoForm}