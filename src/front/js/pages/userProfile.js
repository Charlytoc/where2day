import React, { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context
import "../../styles/home.css";
// import rigoImageUrl from "../../img/Where2Day.png";

// Importar acá los componentes y desarrollar en base a los componentes para tener
// todo ordenado
import { HeaderProfile } from "../component/headerProfile";
import { InfoProfile } from "../component/infoProfile";
import { FeedProfile } from "../component/feedProfile";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
// import { Filtros } from "../component/filtros";
// import { CrearExp } from "../component/crearExp";
// import { MostrarExp } from "../component/mostrarExp";
// import { MostrarEventos } from "../component/mostrarEventos";

export const UserProfile = () => {
    const { store, actions } = useContext(Context); // #3 Consumirlo

    return (
        <>
            {/* BODY GENERAL */}

            <div className="container fluid">
                <div className="row p-3 justify-content-center">
                    {/* PERFIL HEADER */}
                    <div className="col-11">
                        <HeaderProfile username={store.profile.username} />
                    </div>
                    {/* PERFIL INFO */}
                    <div className="row p-3 justify-content-center">
                        <div className="col-4">
                            <InfoProfile />
                        </div>
                        <div className="col-7 border shadow">
                            <FeedProfile />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
