import React from "react";
import { Link } from "react-router-dom";
import  logoPres from "../../img/logo-presentation.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
      <img src={logoPres} alt="Logo" width="100" height="70" class="d-block align-text-top" />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-warning">Me quiero ir un rato</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
