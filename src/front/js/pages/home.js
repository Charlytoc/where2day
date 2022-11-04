import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const Home = () => {
  //   const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="main-header1">
        <div className="ptext">
          
          <Link to="signup" className="dos">
            <span className="border ">
                ¡Unete al Movimiento!
            </span>
          </Link>
          
        </div>
      </div>


     <section className="section section-light">
      <h1> ¿Que es Where2Day?</h1>
      <p> Teniendo todas las herramientas en la palma de tu mano... ¡Debes tomar ventaja!
      <br/>
      <br/>
        Hoy dia no sabemos a donde queremos ir, que hacer con nuestro tiempo libre, ¡A pesar de que tenemos muchas posibilidades!
        
      <br/>
      <br/>
        Where2day tiene como mision hacer eso mas sencillo y darte montones de ideas sociales de las cuales tu puedes formar parte.
      </p>
     </section>

     <div className="main-header2"> 
      <div className="ptext">
        <span className="border trans">
          ¿A donde quiere ir?
        </span>
      </div>
     </div>

    
     <section className="section section-dark">
      <h1> ¿Outdoor , Indoor , Online? </h1>
      <p> 
        Teniendo todas las herramientas en la palma de tu mano... ¡Debes tomar ventaja!
        <br/>
        <br/>
        Hoy dia a pesar de que tenemos montones de opciones, no sabemos a donde ir... ¿Que hacer con nuestro tiempo libre?
        <br/>
        <br/>
         ¡Puedes tener mas cosas disponbiles para hacer de las que pensaste!
        <br/>
        <br/>
        ¡Where2day es la aplicacion que viene a hacer un boost a tu alcance social!
        <br/>
        <br/>
        ¡Mira lo que otras estan diciendo, compartiendo, posteando, atendiendo y unete tambien!
       <br/>
       <br/>

       </p> 
       <p className="sizeEmphasis">
        ¡Unete hoy y empieza a buscar y adentrar en nuevas aventuras cerca de tu ciudad!
       </p>
     </section>

     <div className="main-header3"> 
      <div className="ptext">
      <Link to="signup" className="dos">
        <span className=" border trans">
           Unete a los Eventos Sociales de Where2day
        </span>
      </Link>
      </div>
     </div>

     <section className="section section-dark">
      <h2> ¡Es hora de salir!
        <br/> 
        Where2day es el lugar para que puedas conectar con otros espiritus aventureros</h2>
        <br/>
        <br/>
      <p> ¡Unete a los eventos sociales de nuestra comunidad!
        <br/>
        <br/>
        Puedes formar parte de cualquier evento en Where2Day de los cuales nuestrac comunidad estara compartiendo activamente, lugares para visitar y reuniones sociales.
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
    
      {/* <div className="main-header">
      <div className="background-overlay text-white py-5">
        <div className="container text-center">

         
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
      </div> */}
    </div>


  );
};