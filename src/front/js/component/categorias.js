import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";


export const Categorias = () => {
	const { store, actions } = useContext(Context);


	return (
    <><div className="container d-grid gap-2 bg-warning w-25 float-start border-start border-top border-bottom text-center border-end ms-2 mt-3 border-dark border-2">
        <h1 className="bg-warning border-dark border-bottom mb-2">Categorías</h1>
        <button className="btn btn-light text-warning mb-2">Tus experiencias</button>
        <button className="btn btn-light text-warning mb-2">Buscar por usuario</button>
        <button className="btn btn-light text-warning mb-2">Outdoor</button>
        <button className="btn btn-light text-warning mb-2">Indoor</button>
        <button className="btn btn-light text-warning mb-2">Anywhere</button>

    </div>
    </>
    );
};
