import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/logo-presentation.png";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const Navbar = () => {
  const { store, actions } = useContext(Context); // #3 Consumirlo

  return (
    <nav className="navbar bg-light" style={{ height: 75 }}>
      <div className="container">
        <Link to="/">
          <span className="navbar-brand h1">
            <img src={logoPres} style={{ height: 60 }} />
          </span>
        </Link>
        <div>
          {!store.auth ? (
            <>
              <Link to="/login">
                <button className="btn btn-warning">Login</button>
              </Link>

              <Link to="/signup">
                <button className="btn btn-warning ms-3">Signup</button>
              </Link>
            </>
          ) : (
            <button
              className="btn btn-warning ms-3"
              onClick={() => actions.logout()}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
{
  /* ESTA RUTA ME DEBE DE LLEVAR A LOGIN*/
}

{
  /* ESTA RUTA ME DEBE DE LLEVAR A SIGNUP DADO EL CASO */
}
