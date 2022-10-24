import React, { useState, useContext } from "react"; // #1 import Context de react
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // #2 traer nuestro context
import gsap from "gsap";
import { useEffect } from "react";
import logo from "../../img/logo-where2-alone.png";

import "../../styles/index.css";

export const Reset = () => {
  const [reset, setReset] = useState("");
  
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context); // #3 Consumirlo

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reset);
    console.log(password);
    actions.login(email, password);
  };

  // El siguiente código es la animación que agrande y reduce los botones

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



  // Las siguientes líneas de código permiten hacer aparecer a los elementos
  // unas clases características


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
    <div className="text-center w-50 container animable">
      <br></br>
    <h1 className="mt-4 btn-outline navarra rounded animable2">Recupera tu contraseña</h1>
    <div className="w-100">
    <img src={logo}  className="w-50 mb-2 animable" />
    </div>
    <h2 className="btn-outline navarra rounded mt-2 animable3">Introduce tu correo electrónico</h2>
    <input type="text" placeholder="correo asociado" className="form-control mt-2" />
    <Link to="/">
      <button  
             onMouseDown={disminuir}
             onMouseOver={agrandar} 
             className="btn-outline d-inline-block boton border-0 rounded btn-lg navarra animable2 mt-2 mb-3 boton3" >regresa al inicio</button>
      </Link>
    <br className="mt-4 p-4"></br>
    
    </div>
  );
};
