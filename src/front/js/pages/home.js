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
                Join The Movement!
            </span>
          </Link>
          
        </div>
      </div>


     <section className="section section-light">
      <h1> What is Where2day?</h1>
      <p> Having all the tools at the palm of your hand, you must take advantage!

      <br/>
      <br/>
        Nowadays we do not know where to go, what to do on your free time even tho we have lots of thing available!
      <br/>
      <br/>
        Where2day mission is to make those things easier, and give you plenty of social ideas for you to be part of!
      </p>
     </section>

     <div className="main-header2"> 
      <div className="ptext">
        <span className="border trans">
          Where Do You Want To Go?
        </span>
      </div>
     </div>

    
     <section className="section section-dark">
      <h1> Outdoor , Indoor or Online? </h1>
      <p> 
        {/* <strong> */}
        Having all the tools at the palm of your hand, you must take advantage!
        <br/>
        <br/>
        Nowadays even tho there are lots of options, we do not know where to go... What to do on your free time?
        <br/>
        <br/>
         You may have more things available than you have thought of!
        <br/>
        <br/>
        Where2day is the app to come in and boost your social reach!
        <br/>
        <br/>
        See what others are saying, sharing, posting, attending and join them too!
       
       <br/>
       <br/>

       </p> 
       <p className="sizeEmphasis">Join Us Today And Go And Seek New Adventures Near Your City!
       
       </p>
     </section>

     <div className="main-header3 "> 
      <div className="ptext">
        <span className=" trans">
          <h1>Join Where2day Social Events!</h1>
        </span>
      </div>
     </div>

     <section className="section section-dark">
      <h2> Its time to get out! <br/> Where2day is the place to connect with other adventureous souls!</h2>
        <br/>
        <br/>
      <p> Join our community social events! 
        <br/>
        <br/>
        You can take part of any event on Where2day where the community will be actively sharing tours, places to visit and social gatherings.
      </p>
     </section>

     
      <div className="main-header4">
        <div className="ptext">
        <Link to="signup" className="dos">
            <span className="border ">
                Join The Movement!
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