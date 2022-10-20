import React, {
    useContext
} from "react"; // #1 Traer context de react
import {
    Context
} from "../store/appContext"; // #2 traer nuestro context
import "../../styles/home.css";
// import rigoImageUrl from "../../img/Where2Day.png";

// Importar acá los componentes y desarrollar en base a los componentes para tener
// todo ordenado
import {
    Filtros
} from "../component/filtros";
import {
    CrearExp
} from "../component/crearExp";
import {
    MostrarExp
} from "../component/mostrarExp";
import {
    MostrarEventos
} from "../component/mostrarEventos";

export const Feed = () => {
    const {
        store,
        actions
    } = useContext(Context);

    console.log(store.verEventos);

    return ( <
        >
        {
            /* BODY GENERAL */
        } <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-md-3" > {
            /* Componente para seleccionar los filtros */
        } < Filtros / >
        <
        /div> <
        div className = "col-md-6" > {
            /* Componentes del feed */
        } < CrearExp / >
        <
        MostrarExp / >
        <
        /div>

        <
        div className = "col-md-3" > {
            /* Vista latereal derecho, eventos */
        } {
            store.mostrarEventos.map((item) =>
                <
                div key = {
                    item.id
                } > < MostrarEventos usuarioid = {
                    item.usuarioid
                }
                title = {
                    item.titulo
                }
                lugar = {
                    item.lugar
                }
                fecha = {
                    item.fecha
                }
                description = {
                    item.description
                }
                /> < /
                div > )
        }

        <
        /div> < /
        div > <
        /div> < /
        >
    );
};