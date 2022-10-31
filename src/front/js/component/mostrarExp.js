import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo-where2-alone.png";
import logoPres from "../../img/Logo WHERE2DAY.png";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const MostrarExp = (props) => {

    const { store, actions } = useContext(Context); // #3 Consumirlo

    // ACA LLAMAMOS LA FUNCION QUE HACE EL FETCH QUE VA TRAER LAS EXPERIENCIAS QUE TENEMOS DB

    const [titulo, setTitulo] = useState(props.title)
    const [lugar, setLugar] = useState(props.lugar)
    const [fecha, setFecha] = useState(props.fecha)
    const [description, setDescription] = useState(props.description)
    
    const [indoor, setIndoor] = useState(props.indoor)
    const [outdoor, setOutdoor] = useState(props.outdoor)
    const [anywhere, setAnywhere] = useState(props.anywhere)


    const [desplegar, setDesplegar] = useState(false)
    const desplegarEdit = () => {
        desplegar ? setDesplegar(false) : setDesplegar(true)
        // console.log(desplegar)
    }

// Funcion para llamar al fetch del flux y postear con las variables anteriores
const editExperiencia = () => {
    setDesplegar(false)
    actions.editExp(titulo, props.exp_id, lugar, fecha, description, indoor,outdoor,anywhere) 
     console.table(store.feedExperiencias)
    
  } 
  console.log(props.imageUrl)
  const mostrar = ()=>{
    console.log(indoor)
    console.log(outdoor)
    console.log(anywhere)
  }
    return (
        <>
            <div className=" card " >
            {/* <button onClick={mostrar}> TE MUESTRO LOS BOOLEANOS</button> */}
            
            {/* Empieza el booleano desplegarEdit, depende si true o false */}
            {/* Mostraremos entonces el INPUT para editar o SOLO el Post normal */}
            {desplegar ? 
            <>
                
              <div className="card-header d-flex justify-content-between">
                <input onChange={(e) => {setTitulo(e.target.value)}} value={titulo}
                type="text" className="mt-1 form-control" />
                    {props.expOwner === store.usuario_actual 
                    && 
                    <button className="btn" onClick={desplegarEdit}> 🖊</button> }
                </div>
                <div className="text-center"><img src={props.imageUrl} className="w-75"></img></div>
                <div className=" container text-center">   
                {/* Input de Lugar */}
                    <input onChange={(e) => {setLugar(e.target.value)}} value={lugar}
                    type="text" className="mt-1 form-control" />

                {/* Input de Fecha */}
                    <input onChange={(e) => {setFecha(e.target.value)}} value={fecha}
                    type="text" className="mt-1 form-control" />

                {/* Aca vienen los booleanos editables */}
                <div className="d-flex text-center justify-content-center text-dark bg-light">
                    <input className="mt-1 form-check-input float-start" 
                    onClick={()=>{outdoor ? setOutdoor(false) : setOutdoor(true)}} 
                    type="checkbox" value={outdoor}/>

                    <label className=" form-check-label float-start" htmlFor="flexCheckDefault">
                    Outdoor
                    </label>

                    <input onClick={()=>{indoor ? setIndoor(false) : setIndoor(true)}} 
                    className=" mt-1 form-check-input" type="checkbox" value={indoor}/>

                    <label className=" form-check-label" htmlFor="flexCheckDefault">
                    Indoor
                    </label>

                    <input onClick={()=>{anywhere ? setAnywhere(false) : setAnywhere(true)}}  
                    className="form-check-input float-end" type="checkbox" value={anywhere}/>

                    <label className="form-check-label float-end" htmlFor="flexCheckDefault">
                    Anywhere
                    </label>

                 </div>


                 {/*Input Description  */}
                <input onChange={(e) => {setDescription(e.target.value)}} 
                 value={description} type="text" className="mt-1 form-control" />
                </div>
                
               

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
                <div className="text-center"><img src={props.imageUrl} className="w-75"></img></div>
                <div className=" container text-center">   
                    <h4 className="text-dark text-center d-inline-block" title="Lugar">🔍 {props.lugar}</h4>
                    <h4 className="text-dark text-center d-inline-block" title="Fecha">🗓️ {props.fecha}</h4>
                    { outdoor ? <h4 className="text-dark text-center d-inline-block" title="Outdoor">🏃🏻</h4> : null}
                    { indoor ? <h4 className="text-dark text-center d-inline-block" title="Indoor">🏠</h4> : null}
                    { anywhere ? <h4 className="text-dark text-center d-inline-block" title="Anywhere">🌐</h4> : null}
                </div>
                
                <h4 className="text-dark text-center fs-6 p-5">✍🏻{props.description}</h4>
            </>
                
            }

                
            </div>
        
        </>



    )
}