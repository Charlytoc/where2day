import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";
import axios from 'axios';

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context
import { selector } from "gsap";

export const CrearExp = () => {


  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "pruebas")

    const res = axios.post("https://api.cloudinary.com/v1_1/dlmcf8yed/image/upload", data)
    res.then((data) => setImage(data.data.secure_url))
  }

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
  const [image, setImage] = useState('')
  // Función para desplegar la caja de añadir experiencia
  const desplegarCaja = () => {
    // setDesplegar(true)
    desplegar ? setDesplegar(false) : setDesplegar(true)
  }

  // Funcion para llamar al fetch del flux y postear con las variables anteriores
  const postear = () => {
    setDesplegar(false)
    actions.postear(titulo, lugar, description, fecha, outdoor, indoor, anywhere, image)
    setTitulo('')
    setFecha('')
    setDescription('')
    setLugar('')
    setAnywhere(false)
    setOutdoor(false)
    setIndoor(false)


  }

  const selected = 'selected'
  // El hook siguiente obtiene el usuario que va a postear las experiencias

  useEffect(() => {
    actions.obtenerUsuario()
  }, [])


  // console.log(titulo, description, fecha, lugar, outdoor, indoor, anywhere)
  // console.log("Este es el numero de ID_usuario actual utilizando nuestra app " + store.usuario_actual)
  return (
    <>
      <div id="letra-feed" className="my-5 fijado text-light shadow-lg rounded">
        {/* CARD CREAR EXPERIENCIA */}
        {desplegar ? <>
          <div className="w-100 h-100 rounded">
          <h3 className="text-center p-3 text-dark selected font-weight-bold rounded">Cuéntale al mundo tu experiencia</h3>
          <div className="bg-light">
            {/* Aca editamos Titulo */}
            <input onChange={(e) => { setTitulo(e.target.value) }} value={titulo}
              placeholder="Coloca el titulo de tu publicacion"
              type="text" className="form-control" />

            {/* Aca editamos Lugar */}
            <input onChange={(e) => { setLugar(e.target.value) }} value={lugar}
              placeholder="Coloca la ubicacion de tu experiencia"
              type="text" className="form-control" />

            {/* Aca editamos Fecha*/}
            <input onChange={(e) => { setFecha(e.target.value) }} value={fecha}
              placeholder="Coloca la fecha de tu experiencia"
              type="date" className="form-control" />

            <input className=" form-control" type="file" onChange={(e) => { uploadImage(e) }} />
            <img src={image} className="w-100" />
          </div>

          {/* Botones Booleanos */}
          <div className="text-center my-2 bg-light">
          <button className={indoor ? `btn btn-md navarra ${selected}` : "btn btn-md "} onClick={() => { indoor ? setIndoor(false) : setIndoor(true) }}>Indoor</button>
          <button className={outdoor ? `btn btn-md me-2 ms-2 navarra ${selected}` : "btn btn-md me-2 ms-2 "} onClick={() => { outdoor ? setOutdoor(false) : setOutdoor(true) }}>Outdoor</button>
          <button className={anywhere ? `btn btn-md navarra ${selected}` : "btn btn-md "} onClick={() => { anywhere ? setAnywhere(false) : setAnywhere(true) }}>Anywhere</button>

          </div>

          {/* Abajo viene para la descripcion */}
          <textarea onChange={(e) => { setDescription(e.target.value) }} value={description}
            placeholder="Cuentanos mas sobre tu experiencia!"
            className="form-control" id="floatingTextarea" />
          <div className="text-center rounded">
          <button onClick={postear} className=" btn-outline border-0 click rounded btn-lg animable2 boton3 me-2">Postear</button>
          <button onClick={() => { setDesplegar(false) }} className="mt-2 btn-outline click border-0 rounded btn-lg  animable2 mb-3 boton3">Cerrar</button>
          </div>

          </div>
          </> : 
        <div className="w-100 bg-light">
          <h1 onClick={desplegarCaja} className=" rounded text-center click p-3 btn-outline border-0 text-dark rounded btn-lg animable2 mb-3 boton3 mt-0">Crear post
        </h1>
        </div>
        
        }

      </div>
    </>



  )
}
