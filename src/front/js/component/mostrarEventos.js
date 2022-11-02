import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const MostrarEventos = (props) => {
  const { store, actions } = useContext(Context); // #3 Consumirlo

  //ACA LLAMAMOS LA FUNCION QUE HACE EL FETCH QUE VA TRAER LAS EXPERIENCIAS QUE TENEMOS DE DB

  return (
    <>
      <div className="card text-bg-light mb-3">

        {/* CARD EVENTOS */}
        <h5>
          <div className="card-header font-weight-bold bg-yellw2d">
            Eventos
          </div>
        </h5>
        <div className="card-body">
          <h5 className="card-title"> {props.usuarioid} </h5>
          <h4> {props.title} </h4>
          <h6>
            {props.fecha} • {props.lugar}
          </h6>
          <img
            src="https://media.traveler.es/photos/61376a65ba2a75fcba4be8d5/master/w_1600%2Cc_limit/148355.jpg"
            className="d-block w-100"
            alt="..."
          />
          <p className="card-text">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};
