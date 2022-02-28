import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App/index.js';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);










//Creacion de componenetes

/*function App() {
  return (
    //ANTERIORMENTE ERA ASI React.createElement('h1', {id: 'title'}, "oli react") React vainilla

    //ahora es asi
    <h1 id="title">
      Oli React
    </h1> 
    
  );
}




//**                   DOS FORMAS DE RENDERIZAR 

const e = React.createElement;
ReactDOM.render(e(LikeButton), root) //LikeButton Componente  y donde se va a renderizar root del id del div 

//Se esta renderizando un componenete que esta en App.js:
//SINTAXIS JXS 

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);*/
