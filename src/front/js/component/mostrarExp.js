import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const MostrarExp = (props) => {

    const { store, actions } = useContext(Context); // #3 Consumirlo

    // ACA LLAMAMOS LA FUNCION QUE HACE EL FETCH QUE VA TRAER LAS EXPERIENCIAS QUE TENEMOS DB



    return (
        <>
            <div className="card">
                {/* CARD FEED EXPERIENCIAS */}
                <h5 className="card-header bg-yellw2d">{props.fecha}</h5>
                <div className="card-body">
                    <h4 className="card-title">{props.title} </h4>
                    <p className="card-text">
                        <img
                            src="https://previews.123rf.com/images/danflcreativo/danflcreativo1706/danflcreativo170600254/80138855-guayaquil-ecuador-mayo-2016-r%C3%ADo-guayas-en-la-vista-de-la-isla-santay-desde-el-malec%C3%B3n-2000-guayaquil.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <p>
                            <b>Lugar:</b> {props.ubicacion}
                            <b> Lugar por:</b> {props.publicacion}
                        </p>

                    </p>
                </div>
            </div>
        </>



    )
}