import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
import logoPres from "../../img/logo-presentation.png"

export const Navbar = () => {
  return (
    <nav className="navbar bg-light" style={{height: 75}}>
      <div className="container">
        <Link to="/">
          <span className="navbar-brand h1"><img src={logoPres} style={{height: 60}}/></span>
        </Link>
        <div className="">
          <Link to="/login">
            {/* ESTA RUTA ME DEBE DE LLEVAR A LOGIN*/}
            <button className="btn btn-warning">Login</button>
          </Link>
          <Link to="/signup">
            {/* ESTA RUTA ME DEBE DE LLEVAR A SIGNUP DADO EL CASO */}
            <button className="btn btn-warning ms-3">Signup</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
