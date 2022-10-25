import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const ProfileHeader = () => {
    const { store, actions } = useContext(Context); // #3 Consumirlo

    return (
        <>
            <div className="card">
                <div className="cover-body d-flex justify-content-between align-items-center px-5">
                    <div>
                        <img
                            className="profile-pic rounded-circle"
                            width={150}
                            height={150}
                            src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="profile"
                        />
                        <span className="profile-name">Pepito Perez</span>
                    </div>
                    <div className="d-none d-md-block">
                        <button className="btn btn-danger btn-icon-text btn-edit-profile bg-redw2d fa-regular fa-pen-to-square">
                            Edit profile
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};