import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faPersonHiking } from '@fortawesome/free-solid-svg-icons'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'


import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const FeedProfile = () => {
    const { store, actions } = useContext(Context); // #3 Consumirlo


    console.log(store.post.lugar)
    return (
        <>
            <div className="card">
                <div className="card-header bg-yellw2d"></div>
                <div className="header-profile d-flex">
                    <div className="header-left">
                        <img
                            className="profile-pic-post rounded-circle"
                            width={55}
                            height={55}
                            src={store.profile.image_url}
                            alt="profile" />
                        <div>
                            <h5 className="nombre-usuario text-black">{store.post.titulo}</h5>
                            <p className="titulo-ubicacion text-black">
                                <FontAwesomeIcon icon={faLocation} />{store.post.lugar}</p>
                        </div>

                        <div className="header-right">
                            <div className="icono_puntos">
                                <FontAwesomeIcon icon={faGear} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <img
                        src={store.post.image_url}
                        className="d-block w-100"
                        alt="..."
                    />

                    <p className="float-end"> <FontAwesomeIcon icon={faCalendar} /> {store.post.fecha}</p>
                    <h4 className="text-dark text-center d-inline-block" title="Whatsapp"><FontAwesomeIcon icon={faMessage} /> </h4>
                    <p className="descripcion-post text-dark">
                        {store.post.descripcion}
                    </p>
                </div>
            </div>
        </>
    );
};