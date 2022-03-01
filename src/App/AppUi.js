import React from 'react';
import {TodoContext} from '../TodoContext';
import {TodoCounter}  from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {CreateTodoButton} from '../CreateTodoButton';
import {TodoItem} from '../TodoItem';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import {TodosError} from '../TodosError';
import {TodosLoading} from '../TodoLoading';
import {EmptyTodos} from '../EmptyTodos';



function AppUI() {

    const {
        error,
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
        } = React.useContext(TodoContext)

    return (
        <React.Fragment>


            <TodoCounter/>

            <TodoSearch/>
            
            
            <TodoList>
                    {error && <TodosError error={error}/>}
                    {loading && <TodosLoading/>}
                    {(!loading && !searchedTodos.length) && <EmptyTodos/>}

                    {searchedTodos.map(todo =>(
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed} 
                        onComplete = {() => completeTodo(todo.text)}
                        onDelete = {() => deleteTodo(todo.text)}
                        />
                    ))}
            </TodoList>
            {/*Si open modal es tru*/ }
            {openModal && (
                <Modal>
                {/*Pregunta si tenemos un array de todo antes de imprimir su propiedad text 
                <p>{searchedTodos[0]?.text}</p>*/ }
                    <TodoForm/>
                </Modal>
            )}
            <CreateTodoButton
            setOpenModal = {setOpenModal}
            />
        
        </React.Fragment>
    );
}

export { AppUI }

//           --Antes de React Context
/* function AppUI({

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

            {/*Colocar atri Key un identificador unico que no se repita solo para cuando rendericen listas }
            <TodoList/>
                {/*si hubo un erro cargar p}
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
} */ 

