import React, { useState, useContext, useEffect } from "react"; // #1 import Context de react

import { Context } from "../store/appContext"; // #2 traer nuestro context

import logo from "../../img/ul-logo.png";
import Swal from "sweetalert2";
// import "../../styles/home.css";
import { Link } from "react-router-dom";
import { gsap, Elastic } from "gsap";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context); // #3 Consumirlo

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email != "" && password != "") {
      actions.signup(email, password);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops... Something went wrong!",
        text: "Make sure you are using the correct eMail and/or Password",
      });
    }
    // console.log(email);
    // console.log(password);

    setEmail("");
    setPassword("");
  };


  const saludar = () => {
    console.log("hola")
  }

  const agrandar = () => {
    let boton = document.querySelectorAll(".boton")
    let anim = gsap.to(boton, { scale: 1.2, yoyo: true, duration: 1 })
    anim.play()
  }

  const disminuir = () => {
    let boton = document.querySelector(".boton")
    let anim = gsap.to(boton, { scale: 0.8, yoyo: true, duration: 1 })
    anim.play()
  }

  const agrandar2 = () => {
    let boton = document.querySelectorAll(".boton2")
    let anim = gsap.to(boton, { scale: 1.2, yoyo: true, duration: 1 })
    anim.play()
  }

  const disminuir2 = () => {
    let boton = document.querySelector(".boton2")
    let anim = gsap.to(boton, { scale: 0.8, yoyo: true, duration: 1 })
    anim.play()
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

    let animables = document.querySelectorAll(".animable")
    let animables2 = document.querySelectorAll(".animable2")
    let animables3 = document.querySelectorAll(".animable3")
    timeline.from(animables, {
      y: -50,
      duration: 1,
      opacity: 0,
      stagger: -0.2,
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
    animation()
  }, [])

  return (
    <div className="text-center w-75 navarra container d-flex border shadow bg-body rounded">
      <img src={logo} className="w-50 float-start animable bg-body rounded navarra" />
      <div id="mitad-derecha" className="shadow-lg navarra rounded w-100 h-75 ">
      <h2 className="animable3 w-100 h-30 shadow-lg p-3 bg-body rounded navarra">Bienvenido, espero que te diviertas en tu siguiente experiencia</h2>
      <form className="navarra" onSubmit={handleSubmit}>
        {/* Este es el form de eMail  */}
        <div className="input-group justify-content-center animable2">
          <div className="form-floating">
            <input
              type="email"
              className="form-control animable shadow-lg mt-3 p-3 bg-body rounded"
              aria-describedby="emailHelp"
              placeholder="Your eMail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              className="form-control animable shadow-lg p-3 mt-2 bg-body rounded"
              id="floatingInputGroup1"
              placeholder="Username"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="container mt-2"><button
            
            type="submit"
            className="btn click btn-lg navarra animable2 boton shadow-lg mt-2 p-3 bg-body rounded"

          >
            <span className="animable2"> Signup </span>
          </button></div>
          <div className="container mt-2 mb-3"><Link to="/">
            <button onClick={saludar}
               className="btn click d-inline-block  border-0 rounded btn-lg navarra animable2 boton3 shadow-lg p-3 bg-body rounded" >regresa al inicio</button>
          </Link></div>
          </div>
        </div>
      </form>
      </div>
      

      {/* Aca creamos un form que "onSubmit" nos suba la data a la DB Signup */}
      

    </div>
  );
};
