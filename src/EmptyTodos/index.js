import React from 'react';
import create from './create.png';

import './EmptyTodos.css';


function EmptyTodos (){
    return (
        <div className="container-Empty">
            <p className="empty_title">Create your first task!</p>
            <img src={create} alt="Empty Todos" className="icon"/>
            <p className="empty_message">To add your first task click the button +</p>
        </div>
    )
}

export {EmptyTodos}