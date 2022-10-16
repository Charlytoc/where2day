import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";


export const Feed = () => {
	const { store, actions } = useContext(Context);

    // useEffect( () => {
	// 	actions.obtenerExperiencias()
	// }, [])

    console.log(store.experiencias)

    const handleButton = () => {
        actions.obtenerExperiencias()
    }

	return (
    <><p>Yo seré un post cualquiera</p>
    <button className="btn btn-warning" onClick={handleButton}>Presiona para obtener las experiencias</button>
    </>
    );
};
