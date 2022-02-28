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
            <label>NEW TASK</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="write your task here"
            className=""/>
            <div className="TodoForm-buttonContainer">
                <button onClick={onCancel} type="button" className="TodoForm-button TodoForm-button--cancel">Cancel</button>
                <button  type="submit"  className="TodoForm-button TodoForm-button--add">Add</button>


            </div>
        </form>
    )
}

export {TodoForm}