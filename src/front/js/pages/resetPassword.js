import React, { useState, useContext } from "react"; // #1 import Context de react

import { Context } from "../store/appContext"; // #2 traer nuestro context

import logo from "../../img/logo.png";
// import "../../styles/home.css";

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

  return (
    <div className="text-center w-50 container mt-5">
      <img src={logo} style={{ width: 300 }} className="mb-5" />

      <h1> Reset Your Password </h1>

      {/* Aca creamos un form que "onSubmit" nos suba la data a la DB Signup */}
      <form onSubmit={handleSubmit}>
        {/* Este es el form de eMail  */}
        <div className="mb-3 input-group d-flex justify-content-center">
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="_"
              onChange={(e) => setReset(e.target.value)}
              value={reset}
            />
            <label>Your New Password</label>
          </div>
        </div>

        {/* Este es el form de password */}
        <div className="mb-3 input-group d-flex justify-content-center">
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="_"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label>Confirm New Password</label>
          </div>
        </div>

        {/* Esto es el boton submit */}
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-danger btn-md ms-3" style={{ backgroundColor: 'rgba(222, 82, 81' }}>
            Save New Password
          </button>
        </div>
      </form>
    </div>
  );
};
