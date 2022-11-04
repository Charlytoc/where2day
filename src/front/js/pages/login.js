import React, { useState, useContext, useEffect } from "react"; // #1 import Context de react
import { Link } from "react-router-dom";

import { Context } from "../store/appContext"; // #2 traer nuestro context


import logo from "../../img/comida.jpeg";
import "../../styles/home.css";
import gsap from "gsap";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context); // #3 Consumirlo
  const {desaparecerLogo, setDesaparecerLogo} = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    actions.login(email, password); 
  };

  const agrandar = () => {
    let boton = document.querySelector(".boton")


    let anim = gsap.to(boton, {scale: 1.2, yoyo: true, duration: 1})
    anim.play()
   
  }

  const disminuir = () => {
    let boton = document.querySelector(".boton")


    let anim = gsap.to(boton, {scale: 0.8, yoyo: true, duration: 1})
    anim.play()
   
  }

  const desaparecer = () => {
    
    
    let desaparecerAnimation = () => {}

    console.log(desaparecerLogo)
    let imagen = document.querySelector(".desaparecer")
    gsap.to(imagen, {opacity: 0, duration: 2})

   
    
    console.log("todo bien")
    
  }
  
  const agrandar3 = () => {
    let boton = document.querySelectorAll(".boton3")
    let anim = gsap.to(boton, { scale: 1.2, yoyo: true, duration: 1 })
    anim.play()
  }

  const disminuir3 = () => {
    let boton = document.querySelector(".boton3")
    let anim = gsap.to(boton, { scale: 0.8, yoyo: true, duration: 1 })
    anim.play()
  }


  const timeline = gsap.timeline()

  const animation = () => {
    // console.log("ejecutando")
    let animables = document.querySelectorAll(".animable")
    let animables2 = document.querySelectorAll(".animable2")
    let animables3 = document.querySelectorAll(".animable3")
    timeline.from(animables, {
      y: -50,
      duration: 1,
      opacity: 0,
      stagger: -0.2
    }).from(animables2, {
      x: 50,
      duration: 1,
      opacity: 0,
      stagger: 0.2
    }, "-=0.9").from(animables3, {
      x: -50,
      duration: 1,
      opacity: 0
    }, "-=0.9")
  }

  useEffect(() => {
    animation();
    
  }, [])


  return (
    <div className="text-center w-50 d-flex my-5 container border shadow bg-body rounded">
      <img src={logo} className="w-50 float-start animable bg-body rounded " />
      <div id="mitad-derecha" className="  rounded w-50 h-100 ">
      <h2 className="animable3 w-100 text-center p-3 bg-body rounded ">Inicia sesión</h2>
      <form className="" onSubmit={handleSubmit}>
        {/* Este es el form de eMail  */}
        <div className="input-group text-dark justify-content-center animable2">
          <div className="form-floating">
            <input
              type="email"
              className="form-control animable  mt-3 p-3 bg-body rounded"
              aria-describedby="emailHelp"
              placeholder="Correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              className="form-control animable  p-3 mt-2 bg-body rounded"
              id="floatingInputGroup1"
              placeholder="Username"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="container mt-2"><button
            // onMouseDown={disminuir}
            // onMouseOver={agrandar}
            type="submit"
            className=" click btn-outline border-0 rounded btn-lg  animable2 boton  mt-2 p-3 bg-body rounded"

          >
            <span onClick={handleSubmit} className="animable2">Login</span>
          </button></div>
          <div className="container mt-2 mb-3"><Link to="/">
            <button 
            // onClick={saludar} onMouseDown={disminuir3}
              // onMouseOver={agrandar3} 
              className="btn-outline d-inline-block click border-0 rounded btn-lg  animable2 boton3 shadow-lg p-3 bg-body rounded" >regresa al inicio</button>
          </Link></div>
          <Link style={{ textDecoration: 'none', color: "black" }} to="/reset">
                <p className=" border-0 rounded animable2 boton letra-peq sp-3 bg-body rounded">Clickea acá si perdiste tu contraseña</p>
            </Link>
          </div>
        </div>
      </form>
      </div>
      

      {/* Aca creamos un form que "onSubmit" nos suba la data a la DB Signup */}
      

    </div>
  );
};
