import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo-where2-alone.png";
import logoPres from "../../img/Logo WHERE2DAY.png";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const MostrarExp = (props) => {

    const { store, actions } = useContext(Context); // #3 Consumirlo

    // ACA LLAMAMOS LA FUNCION QUE HACE EL FETCH QUE VA TRAER LAS EXPERIENCIAS QUE TENEMOS DB



    return (
        <><div className="card mt-5 container bg-light rounded pub-title" >
            <div className="card-header d-flex justify-content-between">
            <h3 className="text-dark mt-2 p-3 text-center pub-title">{props.title}</h3>
            {store.usuario_actual === props.expOwner && <button className="btn"> 🖊 </button> }
            </div>
            <div className="text-center"><img src={logo} className="w-75"></img></div>
            <div className=" container text-center">
            {/* <h4 className="text-dark text-center d-inline-block" title="Vivida por">🧔🏻 {props.expOwner}</h4> */}
            
                <h4 className="text-dark text-center d-inline-block" title="Lugar">🔍 {props.lugar}</h4>
               
            
            
            
            <h4 className="text-dark text-center d-inline-block" title="Fecha">🗓️ {props.fecha}</h4>
            { props.outdoor ? <h4 className="text-dark text-center d-inline-block" title="Outdoor">🏃🏻</h4> : null}
            { props.indoor ? <h4 className="text-dark text-center d-inline-block" title="Indoor">🏠</h4> : null}
            { props.anywhere ? <h4 className="text-dark text-center d-inline-block" title="Anywhere">🌐</h4> : null}
            </div>
            
            <h4 className="text-dark text-center fs-6 p-5">✍🏻{props.description}</h4>
        </div>
        
        </>



    )
}