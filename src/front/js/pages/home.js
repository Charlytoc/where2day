import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import rigoImageUrl from "../../img/Where2Day.png";

export const Home = () => {
  //   const { store, actions } = useContext(Context);

  return (
    <div className="row mt-5">
      <div className="col-10 offset-1 col-md-8 offset-md-2">
        <h1 class="text-center">Where2Day</h1> <hr className="my-4" />
      </div>
      <div className="col-12 col-md-8 offset-md-2">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://www.simplemost.com/wp-content/uploads/2015/07/dinner-party.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="http://www.superpark.com.sg/wp-content/uploads/2016/11/SG_Skate-145.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.muscleandfitness.com/wp-content/uploads/2017/08/Female-kayaking-in-cavernous-river.jpg?quality=86&strip=all"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-10 offset-1 col-md-8 offset-md-2">
          <h2 class="text-center">Join the movement!</h2>
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            eum nostrum fuga, minus veritatis sed dignissimos, cupiditate
            asperiores ipsum quaerat inventore eaque, nesciunt nobis laudantium
            laborum itaque repellendus ipsa quia2.{" "}
          </p>
        </div>
      </div>
      <div>
        <div className="col-12 col-md-8 offset-md-2 d-flex justify-content-center">
          <h2 class="text-center px-3">
            <i class="bi bi-facebook"></i>
          </h2>
          <h2 class="text-center px-3">
            <i class="bi bi-instagram"></i>
          </h2>
          <h2 class="text-center px-3">
            <i class="bi bi-twitter"></i>
          </h2>
        </div>
      </div>
    </div>
  );
};
