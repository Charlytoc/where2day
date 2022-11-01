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

    return (
        <>
            <div className="card text-bg-light mb-3">
                {/* CARD EVENTOS */}
                <h6>
                    <div className="card-header font-weight-bold bg-yellw2d">
                        {store.post.titulo}
                    </div>
                </h6>
                <div className="header-feed">
                    <div className="header-left">
                        <img
                            className="profile-pic-post rounded-circle"
                            width={55}
                            height={55}
                            src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="profile" />
                        <div>
                            <h5 className="nombre-usuario text-black">Carlos Toc Toc</h5>
                            <p className="titulo-ubicacion text-black">Guayaquil, Ecuador</p>
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
                        src="https://media.traveler.es/photos/61376a65ba2a75fcba4be8d5/master/w_1600%2Cc_limit/148355.jpg"
                        className="d-block w-100"
                        alt="..."
                    />
                    <p className="descripcion-post text-dark">

                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam
                        eum nostrum fuga, minus veritatis sed dignissimos, cupiditate
                        asperiores ipsum quaerat inventore eaque, nesciunt nobis laudantium
                        laborum itaque repellendus ipsa quia2.

                    </p>
                </div>
            </div>
        </>
    );
};