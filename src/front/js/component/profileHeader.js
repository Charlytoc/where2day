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
        <div className="cover-body d-flex justify-content-between align-items-center">
          <div>
            <img
              className="profile-pic"
              src="https://us.123rf.com/450wm/martialred/martialred1608/martialred160800018/61263271-cuenta-de-usuario-perfil-del-icono-del-c%C3%ADrculo-plana-para-aplicaciones-y-sitios-web.jpg?ver=6"
              alt="profile"
            />
            <span className="profile-name">Pepito Perez</span>
          </div>
          <div className="d-none d-md-block">
            <button className="btn btn-danger btn-icon-text btn-edit-profile bg-redw2d">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-edit btn-icon-prepend"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>{" "}
              Edit profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
