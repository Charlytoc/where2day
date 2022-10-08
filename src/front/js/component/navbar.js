import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import  logoPres from "../../img/logo-presentation.png"
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store, actions}=useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
      <img src={logoPres} alt="Logo" width="100" height="70" className="d-block align-text-top" />
				</Link>
				<div className="ml-auto">
					{/* <Link to="/demo"> */}
						<button onClick={()=>{actions.logout()}} className="btn btn-warning">Me quiero ir un rato</button>
					{/* </Link> */}
				</div>
			</div>
		</nav>
	);
};
