import React, { useContext, useEffect } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context
import "../../styles/home.css";
// import rigoImageUrl from "../../img/Where2Day.png";

// Importar acá los componentes y desarrollar en base a los componentes para tener
// todo ordenado
import { HeaderProfile } from "../component/headerProfile";
import { InfoProfile } from "../component/infoProfile";
import { FeedProfile } from "../component/feedProfile";

// import { Filtros } from "../component/filtros";
// import { CrearExp } from "../component/crearExp";
// import { MostrarExp } from "../component/mostrarExp";
// import { MostrarEventos } from "../component/mostrarEventos";

export const UserProfile = () => {
    const { store, actions } = useContext(Context); // #3 Consumirlo

const newArr = [...store.feedExperiencias, ... store.mostrarEventos];
console.log(newArr);

useEffect(() => {
    actions.filtrarExperiencias(store.usuario_actual)
  }, []);

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
                            
                            <div className="card-header font-weight-bold bg-yellw2d">
                                <h6>Mis experiencias y eventos </h6>
                            </div>
                            <div>
                        {newArr.map((item,index) => <ul key={index} className="list-group list-group-flush">
                            <InfoProfile title={item.titulo}/>
                                                    </ul>)}
                            </div>
                        </div>
                        <div className="col-7">
                            <FeedProfile />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
