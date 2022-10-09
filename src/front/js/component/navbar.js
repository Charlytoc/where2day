import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand h1">Where2DayLOGO</span>
        </Link>
        <div className="">
          <Link to="/login">
            {/* ESTA RUTA ME DEBE DE LLEVAR A LOGIN*/}
            <button className="btn btn-primary">Login</button>
          </Link>
          <Link to="/signup">
            {/* ESTA RUTA ME DEBE DE LLEVAR A SIGNUP DADO EL CASO */}
            <button className="btn btn-primary ms-3">Signup</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
