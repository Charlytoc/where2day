import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";

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
                <button className="btn btn-danger btn-md" style={{ backgroundColor: 'rgba(222, 82, 81' }}>Login</button>
              </Link>

              <Link to="/signup">
                <button className="btn btn-danger btn-md ms-3" style={{ backgroundColor: 'rgba(222, 82, 81' }}>Signup</button>
              </Link>
            </>
          ) : (
            <button
              className="btn btn-danger btn-md ms-3" style={{ backgroundColor: 'rgba(222, 82, 81' }}
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
