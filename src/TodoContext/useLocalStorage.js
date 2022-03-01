import React from 'react';

//React hOOKS

function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue); //Lo que se manda por defecto inicialmente
  
    React.useEffect(()=> {
      setTimeout(()=> {
  
        try{
          //get metodo de localStorage permite guardar informacion 
          //parentesis elemento que llama SIEMPRE ES STRING
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
        
          if (!localStorageItem) {  //verifica si no hay nada en local estore (usuarios nuevos)
            //crea un por defecto lista TODOs
            localStorage.setItem(itemName, JSON.stringify(initialValue));  //setItem (elemtos, lo que guarda)
            //JSON.stringify([]) localstorage solo puede guardar string
            parsedItem = initialValue;
  
  
          } else { //ya tiene TODOS de versiones anteriores
            parsedItem = JSON.parse(localStorageItem) //lo cambia de string a un array
          }
          setLoading(false);
          setItem(parsedItem); //actualiza estado
          
        }
        catch(error){
          setError(error);
        }
      }, 2000);
    }, []); //array vacio para que se ejecute solo una vez
  
  
    
  
  
      //Funcion puente entre el local storage y compete y Deletetodo
  
    const saveItem = (newItem) => {
  
      try{
        const stringfiedItem = JSON.stringify(newItem); //Convierte en string a todos los todos
        localStorage.setItem(itemName, stringfiedItem);
        setItem(newItem); //para modificar el estado
      } catch (error) {
        setError(error);
      }
    };
  
    return { //llaves cuando se tienen mas de un estado no colocar corchetes
      item,
      saveItem,
      loading,
      error,
  
    };
}

export { useLocalStorage };