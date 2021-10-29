import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';






ReactDOM.render(
  <App />,
  document.getElementById('root')
);










/*function App() { //Creacion de componenetes
  return (
    //ANTERIORMENTE ERA ASI React.createElement('h1', {id: 'title'}, "oli react") React vainilla
    <h1 id="title">
      Oli React
    </h1> 
    
  );
}


//**                   DOS FORMAS DE RENDERIZAR 

const e = React.createElement;
ReactDOM.render(e(LikeButton), root) //Componenee y donde se va a renderizar root del id del div 

//Se esta renderizando un componenete que esta en App.js:
//SINTAXIS JXS 

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);*/
