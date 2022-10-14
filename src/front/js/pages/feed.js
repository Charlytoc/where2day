import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
// import rigoImageUrl from "../../img/Where2Day.png";

export const Feed = () => {
  //   const { store, actions } = useContext(Context);

  return (
    <>
      {/* BODY GENERAL */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              {/* CARD FILTROS */}
              <h5>
                <div class="card-header font-weight-bold bg-yellw2d">
                  Filtros
                </div>
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> Tus experiencias </li>
                <li className="list-group-item"> Cerca de ti </li>
                <li className="list-group-item"> En cualquier lugar </li>
              </ul>
              <div className="card-footer bg-yellw2d">Actividades</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card text-bg-light mb-3">
              {/* CARD CREAR EXPERIENCIA */}
              <h5>
                <div class="card-header font-weight-bold bg-yellw2d">
                  Crea una nueva experiencia
                </div>
              </h5>
              <form>
                <div class="row mb-3">
                  <div class="col-sm-12">
                    <label
                      for="exampleFormControlTextarea1"
                      class="form-label"
                    ></label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <fieldset class="row mb-3">
                  <div class="col-sm-10">
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
                <div class="row mb-3">
                  <div class="card-body d-flex justify-content-between align-items-center">
                    <button type="submit" class="btn btn-md bg-redw2d">
                      Publicar
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="card">
              {/* CARD FEED EXPERIENCIAS */}
              <h5 className="card-header bg-yellw2d">Experiencias</h5>
              <div className="card-body">
                <h4 className="card-title"> Visita a la isla Santay </h4>
                <p className="card-text">
                  <img
                    src="https://previews.123rf.com/images/danflcreativo/danflcreativo1706/danflcreativo170600254/80138855-guayaquil-ecuador-mayo-2016-r%C3%ADo-guayas-en-la-vista-de-la-isla-santay-desde-el-malec%C3%B3n-2000-guayaquil.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <p>
                    <b>Lugar:</b> Isla Santay, Guayaquil, Ecuador
                    <b>Lugar por:</b> @charlytoc
                  </p>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.Quibusdam eum nostrum fuga, minus veritatis sed
                  dignissimos, cupiditate asperiores ipsum quaerat inventore
                  eaque, nesciunt nobis laudantium laborum itaque repellendus
                  ipsa quia2..
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card text-bg-light mb-3">
              {/* CARD EVENTOS */}
              <h5>
                <div class="card-header font-weight-bold bg-yellw2d">
                  Eventos
                </div>
              </h5>
              <div class="card-body">
                <h5 class="card-title"> Festival montañitas </h5>
                <img
                  src="https://media.traveler.es/photos/61376a65ba2a75fcba4be8d5/master/w_1600%2Cc_limit/148355.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <p>
                  <b>Lugar:</b> Guayaquil, Ecuador
                </p>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.Quibusdam eum nostrum fuga, minus veritatis sed
                  dignissimos, cupiditate asperiores ipsum quaerat inventore
                  eaque, nesciunt nobis laudantium laborum itaque repellendus
                  ipsa quia2.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
