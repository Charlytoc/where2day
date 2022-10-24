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

   
    //  Esta funcion hara DINAMICO el boton para desplegar (si true) o NO desplegar (si false) este componente
    const desplegarCaja = () => {
        mostrarEvento ? setMostrarEvento(false) : setMostrarEvento(true)
    }

    // useEffect( () =>{console.log(mostrarEvento)} , [])

    const postearEvento = () =>{
        actions.postearEvento(titulo, lugar, description, fecha, outdoor, indoor, anywhere) 
        console.log(titulo)
        console.log(lugar)
        console.log(fecha)
        console.log("Indoor Status is " + indoor)
        console.log("Indoor Status is " + outdoor)
        console.log("Indoor Status is " + anywhere)
        console.log(description)
        setTitulo("")
        setLugar("")
        setFecha("")
        setOutdoor(false)
        setIndoor(false)
        setAnywhere(false)
        setDescription("")
        setMostrarEvento(false)

    }


    return (
        <>
        {!mostrarEvento ?<button onClick={desplegarCaja} className="btn-outline mt-2 border-0 rounded btn-lg navarra animable2 boton3"> Create Event</button>
        : 
        <>
            
        <div className="container mt-2" style={{width: 300}}>
             {/* Este div me permite "Colorear el card" y luego el h4 le pongo ms-2 para que "se centre mejor el texto" */}
             
                <h4 className="p-2 navarra rounded">
                Comparte tus eventos
                </h4>
             
             
             {/* Input almacena en setTitulo y cambia titulo */}
            <input type="text" placeholder="Título del evento" className="form-control" 
            onChange={(e) => setTitulo(e.target.value)} value={titulo}></input>
            
            {/* Input almacena en setLugar y cambia lugar */}
            <input type="text" placeholder="Lugar" className="form-control"
             onChange={(e) => setLugar(e.target.value)} value={lugar}></input>

            {/* Input almacena en setFecha y cambia fecha */}
            <input type="text" placeholder="Fecha" className="form-control"
             onChange={(e) => setFecha(e.target.value)} value={fecha}></input>

            {/* En este div van las Checkbox , centro los etiquetas que iran aca con las class del div*/}
            <div className="input-group container text-center">

                {/* Este checkbox es un ternario on Click que cambia el booleano setIndoor */}
                <input type="checkbox" className="mt-1 form-check-input" 
                onClick={()=> indoor ? setIndoor(false) : setIndoor(true)} value=""></input>
                <p className="ms-1">Indoor</p>
                
                {/* Este checkbox es un ternario on Click que cambia el booleano setOutdoor */}
                <input type="checkbox" className="ms-2 form-check-input" 
                onClick={()=> outdoor ? setOutdoor(false) : setOutdoor(true)} value=""></input>
                <p className="ms-1 ">Outdoor</p>

                {/* Este checkbox es un ternario on Click que cambia el booleano setAnywhere */}
                <input type="checkbox" className="ms-2 form-check-input" 
                onClick={()=> anywhere ? setAnywhere(false) : setAnywhere(true)} value=""></input>
                <p className="ms-1">Anywhere</p>
            </div>
            
            {/* Aca va la descropcion  */}
            <textarea type="text" placeholder="Cuenta cómo será tu evento" className="form-control mb-1"
            onChange={(e) => setDescription(e.target.value)} value={description} id="floatingTextarea"></textarea>

            {/* Boton de publicar y boton de cierre a continuacion */}
            <button className="btn-outline border-0 rounded btn-lg navarra animable2 boton3 me-2" onClick={postearEvento}> Publicar Evento</button>
            <button className="btn-outline border-0 rounded btn-lg navarra animable2 boton3 me-2" onClick={desplegarCaja}> Cerrar </button>
         </div> 
        </> }
        
        </>
    )


}
