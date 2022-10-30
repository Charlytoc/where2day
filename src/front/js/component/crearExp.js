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
     <div className="text-bg-light me-2 d-grip gap-2s">
          {/* CARD CREAR EXPERIENCIA */}
          { desplegar ? <>
          <h2 className="text-center  font-weight-bold navarra rounded">Cuéntale al mundo tu experiencia</h2>
          <div className="bg-light">
            {/* Aca editamos Titulo */}
          <input onChange={(e) => {setTitulo(e.target.value)}} value={titulo} 
          placeholder="Coloca el titulo de tu publicacion" 
          type="text" className="mt-1 form-control" />

          {/* Aca editamos Lugar */}
        <input onChange={(e) => {setLugar(e.target.value)}} value={lugar}  
        placeholder="Coloca la ubicacion de tu experiencia"
        type="text" className="mt-1 form-control" />

        {/* Aca editamos Fecha*/}
        <input onChange={(e) => {setFecha(e.target.value)}} value={fecha} 
        placeholder="Coloca la fecha de tu experiencia" 
        type="date" className="mt-1 form-control" />
          </div>

          {/* Botones Booleanos */}
        <div className="d-flex text-center justify-content-center text-dark bg-light">
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
        
        {/* Abajo viene para la descripcion */}
        <input onChange={(e) => {setDescription(e.target.value)}} value={description} 
        placeholder="Cuentanos mas sobre tu experiencia!"
        className="form-control"  id="floatingTextarea"/>
        
        {/* Boton para postear, al postear hacemos useEffect */}
        <button onClick={postear} className=" btn-outline border-0 rounded btn-lg navarra animable2 boton3 me-2">Postear</button>

        {/* Boton CIERRA el box de "postear" */}
        <button onClick={()=>{setDesplegar(false)}} className="mt-2 btn-outline border-0 rounded btn-lg navarra animable2 mb-3 boton3">Cerrar</button>

          </> : <button onClick={desplegarCaja} className=" btn-outline border-0 rounded btn-lg navarra animable2 mb-3 boton3 mt-0">Crear post</button>
          }
             
     </div>
   </>


        
  )
}
