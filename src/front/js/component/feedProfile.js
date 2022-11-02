import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons'


import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const FeedProfile = () => {
    const { store, actions } = useContext(Context); // #3 Consumirlo


    console.log(store.post.lugar)
    return (
        <>
            <div className="card">
                <div className="card-header bg-yellw2d"></div>
                <h6>
                    <div className="header-profile d-flex">
                        <p>{store.post.titulo}</p>
                        <p className="float-end">{store.post.fecha}</p>
                    </div>
                </h6>
                <div className="header-feed">
                    <div className="header-left">
                        <img
                            className="profile-pic-post rounded-circle"
                            width={55}
                            height={55}
                            src={store.profile.image_url}
                            alt="profile" />
                        <div>
                            <h5 className="nombre-usuario text-black">{store.post.username}</h5>
                            <p className="titulo-ubicacion text-black">{store.post.lugar}</p>
                        </div>
                    </div>

                    <div className="header-right">
                        <div className="icono_puntos">
                            <FontAwesomeIcon icon={faPen} />
                        </div>

                    </div>
                </div>
                <div className="card-body">
                    <img
                        src={store.post.image_url}
                        className="d-block w-100"
                        alt="..."
                    />
                    <p className="descripcion-post text-dark">
                        {store.post.descripcion}
                    </p>
                </div>
            </div>
        </>
    );
};