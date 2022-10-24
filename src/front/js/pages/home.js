import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import rigoImageUrl from "../../img/Where2Day.png";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { redirect } from "react-router-dom";


export const Home = () => {
  //   const { store, actions } = useContext(Context);

  useEffect(() => {
    aparecer()
  }, [])

  const timeline = gsap.timeline()

  const aparecer = () => {
    let world = document.querySelector(".mundo")
    timeline.from(world, {opacity: 0, duration: 6, x:500, scale: 5})
    // .from(world, {opacity: 0, duration: 6, x:500, scale: 5})
    // desaparecer()
  }
  
  

  const desaparecer = () => {
    let world = document.querySelector(".desaparecer")
    gsap.to(world, {opacity: 0, duration: 1, x:500, scale: 2})
    console.log("funciono")
    // redirect("/signup")
  }

  return (
    <><div className="mundo">
      <span  className="columna">¿Te gustaría vivir algo nuevo?</span>
      <span  className="columna">
      <span onClick={desaparecer} className=" desaparecer">Entonces </span>
      <span onClick={desaparecer} className="desaparecer">únete </span>
      <span onClick={desaparecer} className=" desaparecer">a </span>
      <span onClick={desaparecer} className=" desaparecer">Where<Link to="/signup" style={{ textDecoration: 'none' }}><span className="dos">2</span></Link>Day</span></span>
      </div></>
  );
};
