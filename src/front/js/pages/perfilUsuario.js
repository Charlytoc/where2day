import React, { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context
import "../../styles/home.css";
// import rigoImageUrl from "../../img/Where2Day.png";

// Importar acá los componentes y desarrollar en base a los componentes para tener
// todo ordenado
import { ProfileHeader } from "../component/profileHeader";
import { ProfileInfo } from "../component/profileInfo";
import { ProfileFeed } from "../component/profileFeed";
// import { Filtros } from "../component/filtros";
// import { CrearExp } from "../component/crearExp";
// import { MostrarExp } from "../component/mostrarExp";
// import { MostrarEventos } from "../component/mostrarEventos";

export const PerfilUsuario = () => {
  const { store, actions } = useContext(Context); // #3 Consumirlo

  return (
    <>
      {/* BODY GENERAL */}
      <div className="container fluid">
        <div className="row p-3 justify-content-center">
          {/* PERIL HEADER */}
          <div className="col-md-11">
            <ProfileHeader />
          </div>
          {/* PERIL INFO */}
          <div className="row p-3 justify-content-center">
            <div className="col-md-4">
              <ProfileInfo />
            </div>
            <div className="col-md-7">
              <ProfileFeed />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
