import React from 'react';

import {TodoCounter}  from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {CreateTodoButton} from '../CreateTodoButton';
import {TodoItem} from '../TodoItem';


function AppUI({

    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>

            <TodoCounter 
                total = {totalTodos}
                completed = {completedTodos}/>

            <TodoSearch 
                searchValue = {searchValue} 
                setSearchValue = {setSearchValue}/>

            {/*Colocar atri Key un identificador unico que no se repita solo para cuando rendericen listas*/ }
            <TodoList/>
                {/*si hubo un erro cargar p*/}
                {error && <p>Desesperate, hubo un error</p>}
                {loading && <p>Estamos cargando no desesperes...</p>}
                {(!loading && searchedTodos.length) && <p>crea tu primer todoo</p>}
                {searchedTodos.map(todo =>(
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete = {() => completeTodo(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}/>
                ))}
            <TodoList/>

            <CreateTodoButton/>
        
        </React.Fragment>
    );
}

export { AppUI }