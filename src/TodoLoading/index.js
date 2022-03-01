import React from 'react';
import './TodosLoading.css';


function TodosLoading (){
    return (
       
        <li className="TodoItem-loading">
            <div className="LoaderBalls">
                <span className="LoaderBalls__item"></span>
                <span className="LoaderBalls__item"></span>
                <span className="LoaderBalls__item"></span>
            </div>
        </li>
    )
    
    
}

export {TodosLoading}

 /* <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Loading</p>
            <span className="LoadingTodo-deleteIcon"></span>

        </div> */
