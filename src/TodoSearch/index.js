import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){

    //estado inicial segundo funcion que va hacer que cambie estado
   // const [searchValue, setSearchValue] = React.useState(''); //crea estados a componentes cuando son creados como funciones no clases OJO

    const onSearchValueChange = (event) => { //Escucha los cambios de input
        console.log(event.target.value); //se vio en la consola value dentro de target
        setSearchValue(event.target.value);
    } 

    return [
        <input  className="TodoSearch" 
        placeholder="Cebolla"
        value = {searchValue}  //para conectar estado con el input
        onChange = {onSearchValueChange}/>,
        //<p>{searchValue}</p>
    ];
};

export  {TodoSearch}; 