import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  //   const { store, actions } = useContext(Context);

  return (
    <div className="main-header">
      <div className="background-overlay py-5">
        <div className="container">

          {/* COLUMNA IZQUIERDA */}
          <div className="row g-0">
            <div className="col-md-6 text-center">
              <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, iure cupiditate? Dolor molestias,
                corporis esse perspiciatis quidem dolore cupiditate eligendi ex nisi odit,
                modi fugiat reiciendis obcaecati rerum blanditiis reprehenderit?
              </p>

              {/* COLUMNA DERECHA */}
              <div className="row w-100">
                <h2 className="col text-center"></h2>
                <button className="btn navarrawhite fa-regular">
                  Join the movement!
                  {/* onClick={editProfile} */}
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <img src="https://picsum.photos/seed/picsum/500/500" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};
