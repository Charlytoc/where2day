import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons'


import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const HeaderProfile = () => {
    const { store, actions } = useContext(Context); // #3 Consumirlo

    const [username, setUsername] = useState("props.username")
    const [lugar, setLugar] = useState("props.lugar")
    const [correo, setCorreo] = useState("props.correo")
    const [nombre, setNombre] = useState("props.nombre")
    const [apellido, setApellido] = useState("props.apellido")
    const [edad, setEdad] = useState("props.edad")
    const [password, setPassword] = useState("props.password")




    const [desplegar, setDesplegar] = useState(false) // Este es el booleano que nos permitira pasar de EDIT a NO EDIT

    const editProfile = () => {
        desplegar ? setDesplegar(false) : setDesplegar(true);
        console.log(desplegar)
    }

    return (
        <>
            <div className="card">

                {desplegar ? 
                
                // ACA INICIAN TODOS LOS INPUTS QUE SE PUEDEN MODIFICAR/EDITAR Y SERAN ENVIADOS AL BACK
                <div className="cover-body d-flex justify-content-between align-items-center px-5 row ">
                <div className="col-3">
                    <img
                        className="profile-pic rounded-circle"
                        width={150}
                        height={150}
                        src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="profile"
                    />
                    <div className="info-profile">
                        
                        {/*  Este input cambiara username*/}
                        <input onChange={(e) => {setUsername(e.target.value)}} value={username}
                            type="text" className="mt-1 form-control justify-content-center text-center" />

                        {/*  Este input cambiara lugar*/}
                        <input onChange={(e) => {setLugar(e.target.value)}} value={lugar}
                            type="text" className="mt-1 form-control mb-1 justify-content-center text-center" />
                    </div>
                   
                </div>
                 {/* UN COL-4 ACA ARRIBA */}
                 {/* UN COL ACA ABAJO*/}
                 <div className="col-7 justify-content-center text-center">
                    
                    {/*  Este input cambiara correo*/}
                    <input onChange={(e) => {setCorreo(e.target.value)}} value={correo}
                            type="text" className="mt-1 form-control justify-content-center text-center" />

                    {/*  Este input cambiara nombre*/}
                    <input onChange={(e) => {setNombre(e.target.value)}} value={nombre}
                            type="text" className="mt-1 form-control justify-content-center text-center" />
                    
                    {/*  Este input cambiara apellido*/}
                    <input onChange={(e) => {setApellido(e.target.value)}} value={apellido}
                            type="text" className="mt-1 form-control justify-content-center text-center" />
                    
                    {/*  Este input cambiara edad*/}
                    <input onChange={(e) => {setEdad(e.target.value)}} value={edad}
                            type="text" className="mt-1 form-control justify-content-center text-center" />
                    
                    <input onChange={(e) => {setPassword(e.target.value)}} value={password}
                            type="password" className="mt-1 form-control justify-content-center text-center" />
                 </div>

                <div className="header-info col-2">
                    <button className="btn navarra fa-regular" onClick={editProfile}>
                        <FontAwesomeIcon icon={faPen} />
                        Edit profile
                    </button>
                </div>
            </div>
                :
            <div className="cover-body d-flex justify-content-between align-items-center px-5 row ">
                    <div className="col-3">
                        <img
                            className="profile-pic rounded-circle"
                            width={150}
                            height={150}
                            src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="profile"
                        />
                        <div className="info-profile">
                            <h5 className="profile-name text-black">props.username</h5>
                            <p>

                                props.lugar
                            </p>
                        </div>
                       
                    </div>
                     {/* UN COL-4 ACA ARRIBA */}
                     {/* UN COL ACA ABAJO*/}
                     <div className="col-7 justify-content-center text-center">
                        <h3> props.correo</h3>
                        <h3> props.nombre</h3>
                        <h3> props.apellido</h3>
                        <h3> props.edad</h3>
                        <h3> props.password</h3>
                     </div>

                    <div className="header-info col-2">
                        <button className="btn navarra fa-regular" onClick={editProfile}>
                            <FontAwesomeIcon icon={faPen} />
                            Edit profile
                        </button>
                    </div>
            </div>
                }

            </div>
        </>
    );
};