import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
// import logo from "../../img/logo.png";
import "../../styles/home.css";
import { Signup } from "../component/signup";

export const Post = () => {
	const { store, actions } = useContext(Context);
    const [desplegar, setDesplegar] = useState(false)

    const desplegarCaja = () => {
        setDesplegar(true)
    }
    
    const postear = () => {
        setDesplegar(false)
    }

	return (
		<>
        <div className="container w-75 text-center mt-3">

        <button onClick={desplegarCaja} className="btn btn-warning">Crear post</button>
        {desplegar ? <>
        <input placeholder="Título de la experiencia" type="text" className="mt-1 form-control" />
        <input placeholder="Lugar" type="text" className="mt-1 form-control" />
        <input placeholder="Fecha" type="text" className="mt-1 form-control" />
        <input placeholder="Lugar" type="text" className="mt-1 form-control" />
        
        <input className="mt-1 form-check-input float-start" type="checkbox" value=""/>
        <label className=" form-check-label float-start" htmlFor="flexCheckDefault">
        Outdoor
        </label>
        <input className="mt-1 form-check-input" type="checkbox" value=""/>
        <label className=" form-check-label" htmlFor="flexCheckDefault">
        Indoor
        </label>
        <input className="form-check-input float-end" type="checkbox" value=""/>
        <label className="form-check-label float-end" htmlFor="flexCheckDefault">
        Anywhere
        </label>
        <textarea className="form-control" placeholder="Cuenta cómo fue la experiencia" id="floatingTextarea"></textarea>
        <button onClick={postear} className="btn mt-1 btn-warning">Postear</button>
        </> : null }
        
        </div>
        </>

	);
};