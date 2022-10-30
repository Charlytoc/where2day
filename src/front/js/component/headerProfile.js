import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons'

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const HeaderProfile = () => {
    const { store, actions } = useContext(Context); // #3 Consumirlo

    return (
        <>
            <div className="card">
                <div className="cover-body d-flex justify-content-between align-items-center px-5 row ">
                    <div className="col-3">
                        <img
                            className="profile-pic rounded-circle"
                            width={150}
                            height={150}
                            src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="profile"
                        />
                        <div className="info-profile">
                            <h3 className="profile-name text-black">props.username</h3>
                            <p>

                                props.lugar
                            </p>
                        </div>
                       
                    </div>
                     {/* UN COL-4 ACA ARRIBA */}
                     {/* UN COL ACA ABAJO*/}
                     <div className="col-7 justify-content-center text-center">
                        <h3> props.correo</h3>
                        <h3> props.nombre</h3>
                        <h3> props.apellido</h3>
                        <h3> props.edad</h3>
                        <h3> props.password</h3>
                     </div>

                    <div className="header-info col-2">
                        <button className="btn navarra fa-regular">
                            <FontAwesomeIcon icon={faPen} />
                            Edit profile
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};