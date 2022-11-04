import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import rigoImageUrl from "../../img/Where2Day.png";
import { Link } from "react-router-dom";

export const Home = () => {
  //   const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="main-header1">
        <div className="ptext">
          
          <Link to="signup" className="dos">
            <span className="border ">
                ¡Bienvenido a Where2Day!
            </span>
          </Link>
          
        </div>
      </div>


     <section className="section section-light">
      <h1> ¿Qué es Where2Day?</h1>
      <br/>
      <p> El mundo que vivimos actualmente está lleno de experiencias maravillosas
      <br/>
      <br/>
        La misión de nuestra página es hacer de estas experiencias conocimiento de todos.
      <br/>
      <br/>
        
      </p>
     </section>

     <div className="main-header2"> 
      <div className="ptext">
        <span className="border trans">
          ¿Qué tipo de experiencia te gustaría vivir?
        </span>
      </div>
     </div>

    
     <section className="section section-dark">
      <h1>Puedes salir, quedarte en casa o quizás hacer algo online</h1>
      <p> 
        Nuestra sección de filtros se divide en las categorías principales según el tipo de experiencia que desees vivir
        <br/>
        <br/>
        Teniendo todas las herramientas en la palma de tu mano... ¡Debes tomar ventaja!
       <br/>
       <br/>

       </p> 
       <p className="sizeEmphasis">
        ¿Te gustaría ver lo que hacen los demás y hacerlo también después?
       </p>
     </section>

     <div className="main-header3"> 
      <div className="ptext">
      <Link to="signup" className="dos">
        <span className=" border trans">
           Agrega las experiencias a tu lista de tareas
        </span>
      </Link>
      </div>
     </div>

     <section className="section section-dark">
      <h2> ¡Es hora de vivir!
        <br/> 
        Tan solo desliza y entérate de lo que hacen los demás</h2>
        <br/>
        <br/>
      <p> ¿Por qué no vives tus propias experiencias?
        <br/>
        <br/>
       
      </p>
     </section>

     
      <div className="main-header4">
        <div className="ptext">
        <Link to="signup" className="dos">
            <span className="border ">
                ¡Unete al Movimiento!
            </span>
          </Link>
        </div>

        
      </div>
    
      
    </div>


  );
};