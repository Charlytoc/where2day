import React, { useState, useContext } from "react"; // #1 import Context de react

import { Context } from "../store/appContext"; // #2 traer nuestro context

import logo from "../../img/Logo WHERE2DAY.png";
// import "../../styles/home.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context); // #3 Consumirlo

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    actions.login(email, password);
  };

  return (
    <div className="text-center w-50 container mt-5">
      <img src={logo} style={{ width: 290 }} className="mb-5" />

      {/* Aca creamos un form que "onSubmit" nos suba la data a la DB Signup */}
      <form onSubmit={handleSubmit}>
        {/* Este es el form de eMail  */}
        <div className="mb-3 input-group d-flex justify-content-center">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Your eMail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label>Correo electrónico</label>
          </div>
        </div>

        {/* Este es el form de password */}
        <div className="mb-3 input-group d-flex justify-content-center">
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="Username"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label>Contraseña</label>
          </div>
        </div>

        {/* Esto es el boton submit */}
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-md bg-redw2d">
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};
