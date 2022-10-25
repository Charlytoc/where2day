import React, { useState, useContext, useEffect } from "react"; // #1 import Context de react

import { Context } from "../store/appContext"; // #2 traer nuestro context

import logo from "../../img/logo-where2-alone.png";
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
    <div className="text-center w-50 container">
      <img src={logo} className="w-50 mb-2 animable" />

      <h1 className="animable3"> Bienvenido</h1>

      {/* Aca creamos un form que "onSubmit" nos suba la data a la DB Signup */}
      <form onSubmit={handleSubmit}>
        {/* Este es el form de eMail  */}
        <div className="mb-3 input-group d-flex justify-content-center animable2">
          <div className="form-floating">
            <input
              type="email"
              className="form-control animable navarra text-light"
              aria-describedby="emailHelp"
              placeholder="Your eMail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label>email</label>
          </div>
        </div>

        {/* Este es el form de password */}
        <div className="mb-3 input-group d-flex justify-content-center animable3">
          <div className="form-floating">
            <input
              type="password"
              className="form-control animable navarra text-light"
              id="floatingInputGroup1"
              placeholder="Username"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label>password</label>
          </div>
        </div>

        {/* Esto es el boton submit */}
        <div className="d-block justify-content-center animable">
          <button
            onMouseDown={disminuir}
            onMouseOver={agrandar}
            type="submit"
            className="btn-outline border-0 rounded btn-lg navarra animable2 mb-3 boton"
            onSubmit={handleSubmit}

          >
            <span className="animable2">suscríbete</span>
          </button>
          <br></br>
          <Link to="/login">
            <button onMouseDown={disminuir2}
              onMouseOver={agrandar2} className="btn-outline d-inline-block border-0 rounded btn-lg navarra animable2 mb-3 boton2" >ven acá si ya tienes cuenta</button>
          </Link>
          <br></br>
          <Link to="/">
            <button onClick={saludar} onMouseDown={disminuir3}
              onMouseOver={agrandar3} className="btn-outline d-inline-block  border-0 rounded btn-lg navarra animable2 mb-3 boton3" >regresa al inicio</button>
          </Link>
        </div>
      </form>

    </div>
  );
};
