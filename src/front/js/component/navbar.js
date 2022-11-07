import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/ul-large.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'


import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const Navbar = () => {
  const { store, actions } = useContext(Context); // #3 Consumirlo

  return (
    <nav className="navbar fijar bg-light navarra" style={{ height: 80 }}>
      <div className="container">

      <Link to="/feed" style={{ textDecoration: 'none' }}>
            <span className=" fs-4 text-dark" id="estilo">
              <img onClick={()=>{actions.loadExperiencias()}} src={logo} style={{ height: 60 }} />

            </span>
          </Link>



        {/* Aca inicia ternario de login/logout dependiente del auth STATUS */}
        <div>
          {!store.auth ? (
            <>
              <Link to="/login">
                <button className="btn selected navarra btn-md" >Login</button>
              </Link>

              <Link to="/signup">
                <button className="btn selected navarra btn-md ms-3" >Signup</button>
              </Link>
            </>
          ) : (
            <>
              <Link to={`/userProfile/${store.usuario_actual}`}>
                <button
                  className="btn selected btn-lg mt-2">
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </Link>

              <button
                className="btn selected btn-md ms-3 mt-2"
                onClick={() => actions.logout()}>
                Logout
              </button>

            </>
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
