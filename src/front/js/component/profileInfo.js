import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const ProfileInfo = () => {
  const { store, actions } = useContext(Context); // #3 Consumirlo

  return (
    <>
      <div className="card">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <h6 class="card-title mb-0">Detalles</h6>
            <div class="dropdown">
              <button
                class="btn p-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-more-horizontal icon-lg text-muted pb-3px"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            neque cumque quas quidem natus quis repudiandae obcaecati expedita
            consequuntur tempora. Sunt ducimus nesciunt culpa placeat sequi
            nostrum ab aspernatur nulla.
          </p>
          <div class="mt-3">
            <label class="tx-11 font-weight-bold mb-0">Vive en </label>
            <p class="text-muted">Guayaquil, Ecuador</p>
          </div>
        </div>
      </div>
    </>
  );
};
