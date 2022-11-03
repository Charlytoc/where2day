import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import rigoImageUrl from "../../img/Where2Day.png";


export const Home = () => {
  //   const { store, actions } = useContext(Context);

  


  return (
    <div className="main-header">
      <div className="background-overlay text-white py-5">
        <div className="container text-center">

          {/* COLUMNA IZQUIERDA */}
          <div className="row">
            <div className="col-12">
              <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, iure cupiditate? Dolor molestias,
                corporis esse perspiciatis quidem dolore cupiditate eligendi ex nisi odit,
                modi fugiat reiciendis obcaecati rerum blanditiis reprehenderit?
              </p>

              <div className="row w-50 text-center">
                <h2 className="col text-center"></h2>
                <button className="btn btn-light fa-regular">
                  Join the movement!
                  {/* onClick={editProfile} */}
                </button>
              </div>

              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <img src="https://picsum.photos/50/80" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-light mb-6">
                    <img src="https://picsum.photos/50/80" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};