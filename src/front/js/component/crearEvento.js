import React, {useState, useEffect} from "react";

import { useContext} from "react"; // #1 Importar el HOOK useContext
import {Context} from '../store/appContext'; // #2 Traer nuestro context

export const CrearEvento = () => {
    const {store, actions} = useContext(Context); // #3 Consumir el contexto
    
    // Llamo los useStates que cambiare en el form de 
    // "crear evento" , para al hacer SUBMIT subirlo a la DB de eventos
    // 
    const [titulo, setTitulo] = useState("")
    const [lugar, setLugar] = useState("")
    const [description, setDescription] = useState("")
    const [fecha, setFecha] = useState("")
    const [outdoor, setOutdoor] = useState(false)
    const [indoor, setIndoor] = useState (false)
    const [anywhere, setAnywhere] = useState (false)

    const [mostrarEvento, setMostrarEvento] = useState(false)

    // <>
    // <button onClick={ () => {setmostrarEvento (true)}}> Create Event</button>
    // </>
    
    const desplegarCaja = () => {
        mostrarEvento ? setMostrarEvento(false) : setMostrarEvento(true)
    }

    useEffect( () =>{console.log(mostrarEvento)} , [])
    return (
        <>
        {!mostrarEvento ?<button onClick={desplegarCaja}> Create Event</button>: <button onClick={desplegarCaja}>Hola soy todos los forms</button> }
        
        </>
    )


}
