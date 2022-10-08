import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center w-50 container mt-5">
			<img src={logo} style={{width: 300}} />
			<form>
  <div class="mb-3">
    <input type="email" placeholder="Introduce aquí tu email, buenaventurado." class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <input type="password" placeholder="Y por acá tu clave secreta" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    
    <label class="form-check-label" for="exampleCheck1">¿Quieres vivir las mejores experiencas de tu vida?</label>
	<input type="checkbox" class="" id="exampleCheck1"/>
  </div>
  
  <button type="submit" class="btn btn-warning">Unirme a la diversión</button>
</form>
		</div>

	);
};
