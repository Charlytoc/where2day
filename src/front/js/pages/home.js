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

          <div className="display-5">
            Lorem ipsum
          </div>

          <div className="display-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, iure cupiditate? Dolor molestias,
            corporis esse perspiciatis quidem?
          </div>

          <div className="row w-50">
            <button className="btn btn-light fa-regular">
              Join the movement!
              {/* onClick={editProfile} */}
            </button>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-3">
            <div className="col">
              <div className="card bg-card h-100">
                <img src="https://cdn.pixabay.com/photo/2017/03/27/13/52/person-2178868_1280.jpg" className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card bg-card border-light mb-6">
                <img src="https://images.pexels.com/photos/4255483/pexels-photo-4255483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card bg-card h-70">
                <img src="https://images.pexels.com/photos/4063792/pexels-photo-4063792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};