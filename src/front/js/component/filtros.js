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
      <div className="card mb-3 shadow bg-body rounded mt-3 float-start">
        {/* CARD FILTROS */}

        <div className="btn-outline rounded p-3 text-center navarra">
          Filtros
        </div>

        <ul className="list-group click navarra list-group-flush">
          <li onClick={() => { filtrarExp(store.usuario_actual) }} className="click list-group-item">Tus experiencias </li>
          <li onClick={() => { actions.loadExperiencias() }} className="click list-group-item">Últimas</li>
          <li onClick={() => { filtrarExp('outdoor') }} className="click list-group-item">Experiencias fuera de casa</li>
          <li onClick={() => { filtrarExp('indoor') }} className="click list-group-item">Experiencias indoor</li>
          <li onClick={() => { filtrarExp('anywhere') }} className="click list-group-item">Experiencias online</li>
          <li className="hand list-group-item">Actividades</li>
        </ul>
      </div>
    </>



  )
}
