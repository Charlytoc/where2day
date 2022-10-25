import React, { Component } from "react";


export const Footer = () => (
  <footer className="navarra mt-3 pt-2 footer mt-auto text-center">
    <div>
      <a
        className="navarra btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.facebook.com/"
		target="_blank"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-facebook-f"></i>
      </a>

      <a
        className="navarra btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://twitter.com/?lang=en"
		target="_blank"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-twitter"></i>
      </a>


      <a
        className="navarra btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.instagram.com/"
		target="_blank"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-instagram"></i>
      </a>

	
    </div>
	<div className='text-center navarra mt-2 mb-0' >
        © 2022 Copyright:
        <a className=' dos' >Where2Day</a>
      </div>
	

    
  </footer>
);