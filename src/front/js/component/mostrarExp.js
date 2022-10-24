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
        <><div className="mt-2 container bg-light rounded pub-title" >
            <h3 className="text-dark mt-2 p-2 text-center pub-title">{props.title}</h3>
            <div className="text-center"><img src={logo} className="w-75"></img></div>
            <div className=" container text-center">
            <h4 className="text-dark text-center d-inline-block" title="Vivida por">🧔🏻 {props.expOwner}</h4>
            <h4 className="text-dark text-center d-inline-block" title="Lugar">🔍 {props.lugar}</h4>
            <h4 className="text-dark text-center d-inline-block" title="Fecha">🗓️ {props.fecha}</h4>
            </div>
            
            <h4 className="text-dark text-center fs-6 p-5">✍🏻{props.description}</h4>
        </div>
        
        </>



    )
}