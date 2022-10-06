import React from "react";
// import  { useContext } from "react";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";

export const Login = () => {
  //   const { store, actions } = useContext(Context);

  return (
    <>
      <div className="input-group d-flex justify-content-center">
        <span className="input-group-text">Your eMail</span>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInputGroup1"
            placeholder="Username"
          />
          <label for="floatingInputGroup1">eMail</label>
        </div>
      </div>
      <div className="input-group d-flex justify-content-center">
        <span className="input-group-text">Your Password</span>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInputGroup1"
            placeholder="Username"
          />
          <label for="floatingInputGroup1">Password</label>
        </div>
      </div>
    </>
  );
};
