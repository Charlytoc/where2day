import React, { useContext, useEffect, useState } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context
import "../../styles/home.css";
// import rigoImageUrl from "../../img/Where2Day.png";

// Importar acá los componentes y desarrollar en base a los componentes para tener
// todo ordenado
import { Filtros } from "../component/filtros";
import { CrearExp } from "../component/crearExp";
import { MostrarExp } from "../component/mostrarExp";
import { MostrarEventos } from "../component/mostrarEventos";
import { CrearEvento } from "../component/crearEvento";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const Feed = () => {
    const { store, actions } = useContext(Context); // #3 Consumirlo

    const [prueba, setPrueba] = useState(false);
    // console.log(store.feedExperiencias)


    let newArr = [];
    const reverseArray = (arr) => {
        // feedExperiencias
        console.log(store.feedExperiencias);

        store.feedExperiencias.slice().reverse().forEach(x => newArr.push(x))
        console.log(newArr)
    }
    // let newArr = [];
    // store.feedExperiencias.slice().reverse().forEach(x => newArr.push(x));
    // console.log(newArr) ;




    return (
        <>
            <div id="contenedor-feed" className="w-100 row container">

                <div id="contenedor-filtros" className="col-xl-3 col-lg-2 col-md-6 col-sm-12 ">
                <Filtros />
                </div>
                <div id="contenedor-feed" className="col-sm-12 col-md-6 col-lg-7 col-xl-6   ">
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
                        />
                        </div>)}
                </div>
                <div id="contenedor-right" className="col-xl-3 col-sm-12 col-md-6  col-lg-2  ">
                <CrearEvento />
                        <div className="mt-5 text-center ">Últimos eventos</div>

                        {store.mostrarEventos.map((item) =>
                            <div key={item.id} > < MostrarEventos
                                usuarioid={item.usuarioid}
                                title={item.titulo}
                                lugar={item.lugar}
                                fecha={item.fecha}
                                description={item.description}
                            />
                            </div >)
                        }
                </div>
            </div>

          
            
        </>
    );
};