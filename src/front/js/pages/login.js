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
    animation()
  }, [])


  return (
    <div className="text-center w-50 container mt-5">
      <img src={logo} className="mb-2 w-50 animable" />

      <h1 className="animable2"> Login </h1>

      {/* Aca creamos un form que "onSubmit" nos suba la data a la DB Signup */}
      <form onSubmit={handleSubmit}>
        {/* Este es el form de eMail  */}
        <div className="mb-3 input-group d-flex justify-content-center">
          <div className="form-floating animable3">
            <input
              type="email"
              className="form-control animable3"
              aria-describedby="emailHelp"
              placeholder="Your eMail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label>eMail</label>
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
            <label>Password</label>
          </div>
        </div>

            <Link to="/reset">
                <p className="animable2">Forgot Your Password? Click Here</p>
            </Link>

        {/* Esto es el boton submit */}
        <div className="d-flex justify-content-center">
          <button onMouseDown={disminuir}
            onMouseOver={agrandar} type="submit" className="animable3 btn btn-danger btn-md mb-5 ms-3 boton" style={{ backgroundColor: 'rgba(222, 82, 81' }}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
