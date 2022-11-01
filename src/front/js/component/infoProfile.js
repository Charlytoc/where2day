import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const InfoProfile = ({setStore}) => {
    const { store, actions } = useContext(Context); // #3 Consumirlo

    const actualizarPost = (titulo, lugar, image_url, descripcion, fecha) => {
        const post = {
            titulo: titulo,
            lugar: lugar,
            image_url: image_url,
            descripcion: descripcion,
            fecha: fecha,
            username: store.profile.username
        }
        actions.actualizarPost(post)
    }

    console.log(store.feedExperiencias)
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
                    {store.feedExperiencias.map((item, index) => 
                    <li key={index} onClick={()=>{actualizarPost(item.titulo, item.lugar, item.image_url, item.descripcion, item.fecha)}} className="list-group-item hand" >{item.titulo}</li>)}
                
                    
                </ul>
                <div className="card-footer bg-yellw2d">Actividades</div>
            </div>
        </>
    );
};
