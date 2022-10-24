import React from "react";
import { Link } from "react-router-dom";



import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const Navbar = () => {
  const { store, actions } = useContext(Context); // #3 Consumirlo

  return (
    <nav className="navbar bg-light navarra" style={{ height: 80 }}>
      <div className="container">
        
        {/* Aca inicia ternario de REDIRIGIR a home/feed dependiente del auth STATUS */}
        {!store.auth ? (
            <Link to="/">
            <span className="navarra fs-4 text-dark boton-navbar">
              {/* <img src={logoPres} style={{ height: 60 }} /> */}
              Where2Day
            </span>
          </Link>
        ):(
          <Link to="/feed" style={{ textDecoration: 'none' }}>
            <span className="navarra fs-4 text-dark" id="estilo">
              {/* <img src={logoPres} style={{ height: 60 }} /> */}
              Where2Day
            </span>
          </Link>
        )
      }
        


        {/* Aca inicia ternario de login/logout dependiente del auth STATUS */}
        <div>
          {!store.auth ? (
            <>
              <Link to="/login">
                <button className="navarra btn btn-danger btn-md" >Login</button>
              </Link>

              <Link to="/signup">
                <button className="navarra btn btn-danger btn-md ms-3" >Signup</button>
              </Link>
            </>
          ) : (
            <button
              className="mt-2 btn-outline border-0 rounded btn-lg navarra animable2 mb-3 boton3"
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
