import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";
import "../../styles/home.css";
// import { redirect } from "react-router-dom";


export const Signup = () => {
	
    
    const {store, actions}=useContext(Context)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    
        // const navigate = useNavigate();
    
    const handleSubmit = (e)=>{
            e.preventDefault();
            actions.signup(email,password)
    }

    const handleClick = () => {
      actions.login(email,password)
      
    } 
    
	return (

		<div className="text-center w-50 container mt-5">
			<img src={logo} style={{width: 300}} />
			<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input type="email" value={email}
				onChange={(e)=>setEmail(e.target.value)} placeholder="Introduce aquí tu email, buenaventurado." className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="password" value={password}
				onChange={(e)=>setPassword(e.target.value)} placeholder="Y por acá tu clave secreta" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    
    <label className="form-check-label" htmlFor="exampleCheck1">¿Quieres vivir las mejores experiencas de tu vida?</label>
	<input type="checkbox" className="" id="exampleCheck1"/>
  </div>
  
  <button type="submit" className="btn btn-warning">Unirme a la diversión</button>
  <button type="button" onClick={handleClick} className="btn btn-warning">(LOGIN)</button>
</form>
		</div>

	);
};
