import React, { useState, useContext, useEffect } from "react"; // #1 import Context de react
import { Link } from "react-router-dom";

import { Context } from "../store/appContext"; // #2 traer nuestro context


import logo from "../../img/logo-where2-alone.png";
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
    <div className="text-center w-50 container mt-5">
      <img src={logo} onClick={desaparecer} className="mb-2 w-50 animable desaparecer" />

      <h1 className="animable2 desaparecer">Inicia sesión</h1>

      {/* Aca creamos un form que "onSubmit" nos suba la data a la DB Signup */}
      <form onSubmit={handleSubmit}>
        {/* Este es el form de eMail  */}
        <div className="mb-3 input-group d-flex justify-content-center">
          <div className="form-floating animable3">
            <input
              type="email"
              className="form-control animable3 desaparecer"
              aria-describedby="emailHelp"
              placeholder="Your eMail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label>email</label>
          </div>
        </div>

        {/* Este es el form de password */}
        <div className="mb-3 input-group d-flex justify-content-center animable2">
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="Username"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label>contraseña</label>
          </div>
        </div>

            <Link style={{ textDecoration: 'none', color: "black" }} to="/reset">
                <p className="animable2 dos">Clickea acá si perdiste tu contraseña</p>
            </Link>

        {/* Esto es el boton submit */}
        <div className="d-flex justify-content-center">
          <button onMouseDown={disminuir}
            onMouseOver={agrandar} type="submit" className="animable3 btn-outline border-0 rounded btn-lg ms-3 boton navarra" >
            Inicia sesión
          </button>
          
        </div>
      </form>
      <Link to="/">
      <button onMouseDown={disminuir3}
            onMouseOver={agrandar3} className="mt-2 btn-outline border-0 rounded btn-lg navarra animable2 mb-3 boton3" >regresa al inicio</button>
      </Link>
    </div>
  );
};
