import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const InfoProfile = () => {
    const { store, actions } = useContext(Context); // #3 Consumirlo

    return (
        <>
            <div className="card text-bg-light mb-3">
                {/* CARD EVENTOS */}
                <h6>
                    <div className="card-header font-weight-bold bg-yellw2d">
                        Mis eventos/otros
                    </div>
                </h6>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> Recuentro clase 2009 </li>
                    <li className="list-group-item"> Tour al Volcán Arenal </li>
                    <li className="list-group-item"> Visita al el teleferico barrio de San Agustin </li>
                </ul>
                <div className="card-footer bg-yellw2d">Actividades</div>
            </div>
        </>
    );
};
