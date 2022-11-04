import React, { useContext, useEffect, useState } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context
import "../../styles/home.css";
// import rigoImageUrl from "../../img/Where2Day.png";

// Importar acá los componentes y desarrollar en base a los componentes para tener
// todo ordenado
import { Filtros } from "../component/filtros";
import { CrearExp } from "../component/crearExp";
import { MostrarExp } from "../component/mostrarExp";
import { Todos } from "../component/todos";

export const Feed = () => {
    const { store, actions } = useContext(Context); // #3 Consumirlo

    const [prueba, setPrueba] = useState(false);
 
    console.log(store.feedExperiencias)

    return (
        <>
            <div id="contenedor-feed" className="w-100 row container-flex">

                <div id="contenedor-filtros" className="ms-5 col-xxl-3 col-xl-3 col-lg-2 col-md-6 col-sm-12 ">
                <Filtros />
                </div>
                <div id="contenedor-feed" className="col-xxl-5 col-sm-12 col-md-6 col-lg-7 col-xl-5 container-flex me-3 ">
                <CrearExp />
                <h1 className="mt-2 text-center rounded p-2">{store.feed}</h1>

                        {store.feedExperiencias.map((item) => <div key={item.id}><MostrarExp
                            title={item.titulo}
                            fecha={item.fecha}
                            description={item.descripcion}
                            lugar={item.lugar}
                            exp_id={item.id}
                            expOwner={item.exp_owner}
                            outdoor={item.outdoor}
                            indoor={item.indoor}
                            anywhere={item.anywhere}
                            image_url={item.image_url}
                            likes={item.likes}
                            imageOwner={item.owner.image_url}
                        />
                        </div>)}
                </div>
                <div id="contenedor-right" className="ms-3 col-xxl-3 col-xl-3 col-sm-12 col-md-6  col-lg-2  ">
                    <Todos />
                </div>
            </div>

          
            
        </>
    );
};