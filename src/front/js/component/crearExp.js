import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const CrearExp = () => {

  const { store, actions } = useContext(Context); // #3 Consumirlo

  return (
   <>
     <div className="card text-bg-light mb-3">
              {/* CARD CREAR EXPERIENCIA */}
              <h5>
                <div className="card-header font-weight-bold bg-yellw2d">
                  Crea una nueva experiencia
                </div>
              </h5>
              <form>
                <div className="row mb-3">
                  <div className="col-sm-12">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    ></label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <fieldset className="row mb-3">
                  <div className="col-sm-10">
                    {/* <button type="button" className="btn btn-sm bg-redw2d">
                      Imagen
                    </button> */}
                    {/* <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      style={{ backgroundColor: "rgba(222, 82, 81)" }}
                    >
                      Evento
                    </button> */}
                    {/* <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      style={{ backgroundColor: "rgba(222, 82, 81)" }}
                    >
                      Check in
                    </button> */}
                  </div>
                </fieldset>
                <div className="row mb-3">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <button type="submit" className="btn btn-md bg-redw2d">
                      Publicar
                    </button>
                  </div>
                </div>
              </form>
            </div>
   </>


        
  )
}
