import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
// import logo from "../../img/logo.png";
import "../../styles/home.css";
import { Signup } from "../component/signup";
import { Outlet } from "react-router-dom";

export const Post = () => {
	const { store, actions } = useContext(Context);
    const [desplegar, setDesplegar] = useState(false)
    const [titulo, setTitulo] = useState('')
    const [lugar, setLugar] = useState('')
    const [fecha, setFecha] = useState('')
    const [description, setDescription] = useState('')
    const [outdoor, setOutdoor] = useState(false)
    const [indoor, setIndoor] = useState(false)
    const [anywhere, setAnywhere] = useState(false)


    const desplegarCaja = () => {
        setDesplegar(true)
    }
    
    const postear = () => {
        setDesplegar(false)
        actions.postear(titulo, lugar, description)
        setTitulo('')
        setFecha('')
        setDescription('')
        setLugar('')

    }

    // console.log(description)
    // console.log(fecha)
    // console.log(titulo)
    // console.log(lugar)
    // console.log(outdoor)
    // console.log(indoor)
    // console.log(anywhere)
    


	return (
		<>
        <div className="container w-75 text-center mt-3">

        <button onClick={desplegarCaja} className="btn btn-warning">Crear post</button>
        {desplegar ? <>
        <input onChange={(e) => {setTitulo(e.target.value)}} value={titulo} placeholder="Título de la experiencia" type="text" className="mt-1 form-control" />
        <input onChange={(e) => {setLugar(e.target.value)}} value={lugar} placeholder="Lugar" type="text" className="mt-1 form-control" />
        <input onChange={(e) => {setFecha(e.target.value)}} value={fecha} placeholder="Fecha" type="text" className="mt-1 form-control" />
        
        <input className="mt-1 form-check-input float-start" onClick={()=>{setOutdoor(true)}} type="checkbox" value=""/>
        <label className=" form-check-label float-start" htmlFor="flexCheckDefault">
        Outdoor
        </label>
        <input onClick={()=>{setIndoor(true)}}  className="mt-1 form-check-input" type="checkbox" value=""/>
        <label className=" form-check-label" htmlFor="flexCheckDefault">
        Indoor
        </label>
        <input onClick={()=>{setAnywhere(true)}}  className="form-check-input float-end" type="checkbox" value=""/>
        <label className="form-check-label float-end" htmlFor="flexCheckDefault">
        Anywhere
        </label>
        <textarea onChange={(e) => {setDescription(e.target.value)}} value={description} className="form-control" placeholder="Cuenta cómo fue la experiencia" id="floatingTextarea"></textarea>
        <button onClick={postear} className="btn mt-1 btn-warning">Postear</button>
        </> : null }
        
        </div>
        </>

	);
};