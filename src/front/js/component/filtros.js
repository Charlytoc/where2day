import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const Filtros = () => {

  const { store, actions } = useContext(Context); // #3 Consumirlo

  const filtrarExp = (filtro) => {
    actions.filtrarExperiencias(filtro)
  }



  return (
    <> 
      <div className="card shadow bg-body fijar-fil rounded my-5 float-start">

        <h4 className="btn-outline mb-0 rounded p-3 text-center selected">
          Filtros
        </h4>

        <ul className="list-group mt-0 click list-group-flush">
          <li onClick={() => { filtrarExp(store.usuario_actual) }} className="click list-group-item">Tus experiencias </li>
          <li onClick={() => { actions.loadExperiencias() }} className="click list-group-item">Últimas</li>
          <li onClick={() => { filtrarExp('outdoor') }} className="click list-group-item">Experiencias fuera de casa</li>
          <li onClick={() => { filtrarExp('indoor') }} className="click list-group-item">Experiencias indoor</li>
          <li onClick={() => { filtrarExp('anywhere') }} className="click list-group-item">Experiencias online</li>
          {/* <li className="hand list-group-item">Actividades</li> */}
        </ul>
      </div>
    </>



  )
}
