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
      <div className="card mt-5 me-2">
        {/* CARD FILTROS */}

        <div className="btn-outline rounded p-2 text-center navarra">
          Filtros
        </div>

        <ul className="list-group list-group-flush">
          <li onClick={() => { filtrarExp(store.usuario_actual) }} className="hand list-group-item">Tus experiencias </li>
          <li onClick={() => { actions.loadExperiencias() }} className="hand list-group-item bg-yellw2d">Últimas</li>
          <li onClick={() => { filtrarExp('outdoor') }} className="hand list-group-item">Experiencias fuera de casa</li>
          <li onClick={() => { filtrarExp('indoor') }} className="hand list-group-item">Experiencias indoor</li>
          <li onClick={() => { filtrarExp('anywhere') }} className="hand list-group-item">Experiencias online</li>
        </ul>
        <div className="hand card-footer bg-yellw2d">Actividades</div>
      </div>
    </>



  )
}
