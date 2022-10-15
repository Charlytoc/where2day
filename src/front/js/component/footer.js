import React, { Component } from "react";


export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <p>
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.facebook.com/"
		target="_blank"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-facebook-f"></i>
      </a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://twitter.com/?lang=en"
		target="_blank"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-twitter"></i>
      </a>


      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.instagram.com/"
		target="_blank"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="fab fa-instagram"></i>
      </a>

	
    </p>
	<div className='text-center p-3' style={{ backgroundColor: 'rgba(252, 247, 255, 0.8)' }}>
        © 2022 Copyright:
        <a className='text-yellow' > 4Geeks Academy</a>
      </div>
	

    
  </footer>
);