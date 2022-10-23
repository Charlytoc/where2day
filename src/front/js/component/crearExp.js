import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const CrearExp = () => {

  const { store, actions } = useContext(Context); // #3 Consumirlo

  // Les explico poco a poco lo que haré:
  // Declaro varios estados usando el hook useState

  const [desplegar, setDesplegar] = useState(false)
  const [titulo, setTitulo] = useState('')
  const [lugar, setLugar] = useState('')
  const [fecha, setFecha] = useState('')
  const [description, setDescription] = useState('')
  const [outdoor, setOutdoor] = useState(false)
  const [indoor, setIndoor] = useState(false)
  const [anywhere, setAnywhere] = useState(false)


  // Función para desplegar la caja de añadir experiencia
  const desplegarCaja = () => {
    // setDesplegar(true)
    desplegar ? setDesplegar(false) : setDesplegar(true)
}

// Funcion para llamar al fetch del flux y postear con las variables anteriores
const postear = () => {
  setDesplegar(false)
  actions.postear(titulo, lugar, description, fecha, outdoor, indoor, anywhere)
  setTitulo('')
  setFecha('')
  setDescription('')
  setLugar('')
  setAnywhere(false)
  setOutdoor(false)
  setIndoor(false)

}

// El hook siguiente obtiene el usuario que va a postear las experiencias

useEffect( () => {
  actions.obtenerUsuario()
}, [])


// console.log(titulo, description, fecha, lugar, outdoor, indoor, anywhere)
// console.log("Este es el numero de ID_usuario actual utilizando nuestra app " + store.usuario_actual)
  return (
   <>
     <div className="card text-bg-light mb-3">
          {/* CARD CREAR EXPERIENCIA */}
          { desplegar ? <>
          <h2 className="p-2 text-center mt-2 font-weight-bold bg-yellw2d">Cuéntale al mundo tu experiencia</h2>
          <input onChange={(e) => {setTitulo(e.target.value)}} value={titulo} placeholder="Título de la experiencia" type="text" className="mt-1 form-control" />
        <input onChange={(e) => {setLugar(e.target.value)}} value={lugar} placeholder="Lugar" type="text" className="mt-1 form-control" />
        <input onChange={(e) => {setFecha(e.target.value)}} value={fecha} placeholder="Fecha" type="text" className="mt-1 form-control" />

        <div className="container text-center">
            <input className="mt-1 form-check-input float-start" onClick={()=>{outdoor ? setOutdoor(false) : setOutdoor(true)}} type="checkbox" value=""/>
            <label className=" form-check-label float-start" htmlFor="flexCheckDefault">
            Outdoor
            </label>
            <input onClick={()=>{indoor ? setIndoor(false) : setIndoor(true)}}  className=" mt-1 form-check-input" type="checkbox" value=""/>
            <label className=" form-check-label" htmlFor="flexCheckDefault">
            Indoor
            </label>
            <input onClick={()=>{anywhere ? setAnywhere(false) : setAnywhere(true)}}  className="form-check-input float-end" type="checkbox" value=""/>
            <label className="form-check-label float-end" htmlFor="flexCheckDefault">
            Anywhere
            </label>

         </div>
        
        <textarea onChange={(e) => {setDescription(e.target.value)}} value={description} className="form-control" placeholder="Cuenta cómo fue la experiencia" id="floatingTextarea"></textarea>
        <button onClick={postear} className="btn btn-md mt-1 bg-redw2d">Postear</button>
        <button onClick={()=>{setDesplegar(false)}} className="btn mt-1 btn-md bg-redw2d">Cerrar</button>

          </> : <button onClick={desplegarCaja} className="btn btn-md bg-redw2d">Crear post</button>
          }
             
     </div>
   </>


        
  )
}
