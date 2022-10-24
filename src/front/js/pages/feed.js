import React, { useContext } from "react"; // #1 Traer context de react
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

    // console.log(store.feedExperiencias)

    return (
        <>
            {/* BODY GENERAL */}
            <Navbar />
            <div className="d-flex container m-0">
                <div className="filtros w-25"><Filtros /></div>
                <div className="centro w-50 me-2 mt-2">
                
                <CrearExp />
                        {/* <MostrarExp /> */}
                        <div className="navarra mt-2 text-center">Últimas experiencias</div>
                        {store.feedExperiencias.map((item) => <div key={item.id}><MostrarExp
                            title={item.titulo}
                            fecha={item.fecha}
                            publicacion={item.description}
                            ubicacion={item.lugar}
                            user={item.id}
                        /></div>)}
                        </div>
                        <div className="derecho w-25 float-end"><CrearEvento/>
                        {store.mostrarEventos.map((item) =>
                            <div key={item.id} > < MostrarEventos
                                usuarioid={item.usuarioid}
                                title={item.titulo}
                                lugar={item.lugar}
                                fecha={item.fecha}
                                description={item.description}
                            />
                            </div >)
                        } </div>  
                        </div>
                
            <Footer />
        </>
    );
};