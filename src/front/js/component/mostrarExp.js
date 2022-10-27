import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo-where2-alone.png";
import logoPres from "../../img/Logo WHERE2DAY.png";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const MostrarExp = (props) => {

    const { store, actions } = useContext(Context); // #3 Consumirlo

    // ACA LLAMAMOS LA FUNCION QUE HACE EL FETCH QUE VA TRAER LAS EXPERIENCIAS QUE TENEMOS DB

    const [titulo, setTitulo] = useState(props.title)
    
    const [desplegar, setDesplegar] = useState(false)
    const desplegarEdit = () => {
        desplegar ? setDesplegar(false) : setDesplegar(true)
        // console.log(desplegar)
    }

// Funcion para llamar al fetch del flux y postear con las variables anteriores
const editExperiencia = () => {
    setDesplegar(false)
    actions.editExp(titulo, props.exp_id)
    setTitulo('')
    // setFecha('')
    // setDescription('')
    // setLugar('')
    // setAnywhere(false)
    // setOutdoor(false)
    // setIndoor(false)
  
  }

    return (
        <>
            <div className=" card " >
            {/* Empieza el booleano desplegarEdit, depende si true o false */}
            {/* Mostraremos entoncs el INPUT para editar o el Post normal */}
            {desplegar ? 
            <>
                <div className="card-header d-flex justify-content-between">
                <input onChange={(e) => {setTitulo(e.target.value)}} value={titulo}
                type="text" className="mt-1 form-control" />
                    {props.expOwner === store.usuario_actual 
                    && 
                    <button className="btn" onClick={desplegarEdit}> 🖊</button> }
                </div>
                <div className="text-center"><img src={logo} className="w-75"></img></div>
                <div className=" container text-center">   
                    <h4 className="text-dark text-center d-inline-block" title="Lugar">🔍 {props.lugar}</h4>
                    <h4 className="text-dark text-center d-inline-block" title="Fecha">🗓️ {props.fecha}</h4>
                    { props.outdoor ? <h4 className="text-dark text-center d-inline-block" title="Outdoor">🏃🏻</h4> : null}
                    { props.indoor ? <h4 className="text-dark text-center d-inline-block" title="Indoor">🏠</h4> : null}
                    { props.anywhere ? <h4 className="text-dark text-center d-inline-block" title="Anywhere">🌐</h4> : null}
                </div>
                
                <h4 className="text-dark text-center fs-6 p-5">✍🏻{props.description}</h4>
                <button  className=" btn-outline border-0 rounded btn-lg navarra animable2 mb-3 boton3 mt-0"
                 onClick={editExperiencia}>
                     Edit Post
                </button>
            </>
        :
             <>
                <div className="card-header d-flex justify-content-between">
                    <h3 >{props.title}</h3>
                    {props.expOwner === store.usuario_actual 
                    && 
                    <button className="btn" onClick={desplegarEdit}> 🖊</button> }
                </div>
                <div className="text-center"><img src={logo} className="w-75"></img></div>
                <div className=" container text-center">   
                    <h4 className="text-dark text-center d-inline-block" title="Lugar">🔍 {props.lugar}</h4>
                    <h4 className="text-dark text-center d-inline-block" title="Fecha">🗓️ {props.fecha}</h4>
                    { props.outdoor ? <h4 className="text-dark text-center d-inline-block" title="Outdoor">🏃🏻</h4> : null}
                    { props.indoor ? <h4 className="text-dark text-center d-inline-block" title="Indoor">🏠</h4> : null}
                    { props.anywhere ? <h4 className="text-dark text-center d-inline-block" title="Anywhere">🌐</h4> : null}
                </div>
                
                <h4 className="text-dark text-center fs-6 p-5">✍🏻{props.description}</h4>
            </>
                
            }

                
            </div>
        
        </>



    )
}