import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const Filtros = () => {

  const { store, actions } = useContext(Context); // #3 Consumirlo

  return (
   <>
    <div className="card">
              {/* CARD FILTROS */}
              <h5>
                <div className="card-header font-weight-bold bg-yellw2d">
                  Filtros
                </div>
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> Tus experiencias </li>
                <li className="list-group-item"> Cerca de ti </li>
                <li className="list-group-item"> En cualquier lugar </li>
              </ul>
              <div className="card-footer bg-yellw2d">Actividades</div>
            </div>
   </>


        
  )
}