import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const HeaderProfile = () => {
    const { store, actions } = useContext(Context); // #3 Consumirlo
    const params = useParams()
    const [username, setUsername] = useState("")
    const [pais, setPais] = useState("")
    const [email, setEmail] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState("")
    const [image, setImage] = useState("")
    const [password, setPassword] = useState("")

    const [desplegar, setDesplegar] = useState(false) // Este es el booleano que nos permitira pasar de EDIT a NO EDIT

    const editProfile = () => {
        desplegar ? setDesplegar(false) : setDesplegar(true);
    }

    const submitChanges = async () => {

        // actions.editUser(email, password, username, nombre, apellido, edad, pais)
        try {
            setDesplegar(false)
            const url = process.env.BACKEND_URL + "/api/updateUser"
            const resp = await axios.post(url, {
                username: username,
                usuario_id: store.usuario_actual,
                pais: pais,
                email: email,
                password: password,
                edad: edad,
                nombre: nombre,
                apellido: apellido,
                image_url: image
            })
            console.log(resp.data)
            actions.getUserProfile()
        }
        catch (error) { console.log(error) }

    }

    const uploadImage = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "pruebas")

        const res = axios.post("https://api.cloudinary.com/v1_1/dlmcf8yed/image/upload", data)
        res.then((data) => setImage(data.data.secure_url))
    }

    console.log(params.id)

    useEffect(() => {
        actions.getUserProfile(params.id);
    }, []);

    return (
        <>
            <div className="container border w-75 shadow">

                {desplegar ?<>

                    <div className="row">
                        <div className="col-3">
                        <img
                                className="profile-pic w-100 rounded-circle justify-content-center"
                                src={store.profile.image_url}
                                alt="profile"
                            />
                        
                        </div>
                        <div className="col-9 container">
                            <div className="row mt-3">
                            <div className="col-6"><input onChange={(e) => { setUsername(e.target.value) }} value={username} placeholder="Username"
                                    type="text" className=" form-control justify-content-center border-0" /></div>
                            <div className="col-6"><button onClick={editProfile} className="btn border click" > Editar perfil</button></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-1"></div>
                                <div className="col-5"> <input onChange={(e) => { setNombre(e.target.value) }} value={nombre} placeholder="Ingresa Tu Nombre"
                                type="text" className="mt-1 form-control border-0 justify-content-center text-center" /></div>
                                
                                <div className="col-5"><input onChange={(e) => { setPais(e.target.value) }} value={pais} placeholder="País"
                                    type="text" className="mt-1 form-control border-0 justify-content-center text-center mb-2" /></div>
                                <div className="col-1"></div>
                            </div>
                            <div className="row">
                            <div className="col-1"></div>
                            <div className="col-5"> <input onChange={(e) => { setApellido(e.target.value) }} value={apellido} placeholder="Ingresa Tu Apellido"
                                type="text" className="mt-1 form-control border-0 justify-content-center text-center" /></div>
                            <div className="col-5"> <input onChange={(e) => { setEdad(e.target.value) }} value={edad} placeholder="Ingresa tu edad"
                                type="text" className="mt-1 form-control border-0 justify-content-center text-center" /></div>
                            <div className="col-1"></div>
                            </div>
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-5"> <input onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Ingresa tu correo"
                                type="text" className="mt-1 border-0 form-control justify-content-center text-center" /></div>
                                <div className="col-5"> <input onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Introduce Tu Contraseña Aqui"
                                type="password" className="mt-1 form-control justify-content-center text-center" /></div>
                                <div className="col-1"></div>
                            </div>
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-5"><input onChange={(e) => { uploadImage(e) }}
                                    type="file" className="mt-1 form-control justify-content-center text-center" /></div>
                                <div className="col-5"><button className="btn border mt-2" onClick={submitChanges}>
                                <FontAwesomeIcon icon={faPen} />
                                Guardar cambios
                            </button></div>
                                <div className="col-1"></div>
                            </div>

                        </div>
                    </div>

                    </>
                    :
                        <>
                    
                    <div className="row">
                        <div className="col-3">
                        <img
                                className="profile-pic w-100 rounded-circle justify-content-center"
                                src={store.profile.image_url}
                                alt="profile"
                            />
                        </div>
                        <div className="col-9 container">
                            <div className="row mt-3">
                            <div className="col-6">{store.profile.username === null ? <h2><b>Elije Un Username</b></h2> : <h2 className="profile-name text-black">{store.profile.username}</h2>}</div>
                            <div className="col-6"><button onClick={editProfile} className="btn border click" > Editar perfil</button></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-1"></div>
                                <div className="col-5">{store.profile.nombre === null ? <p><b>Confirma Tu Nombre</b></p> : <p className="fs-5"> {store.profile.nombre}</p>}</div>
                                
                                <div className="col-5">{store.profile.pais === null ? <p><b>Elije Tu Ubicacion</b></p> : <p className="fs-5 text-black">{store.profile.pais}</p>}</div>
                                <div className="col-1"></div>
                            </div>
                            <div className="row">
                            <div className="col-1"></div>
                            <div className="col-5"> {store.profile.apellido === null ? <p><b>Confirma Tu Apellido</b></p> : <p className="fs-5"> {store.profile.apellido}</p>}</div>
                            <div className="col-5"> {store.profile.edad === null ? <p><b>Confirma Tu Edad</b></p> : <p className="fs-5"> {store.profile.edad}</p>}</div>
                            <div className="col-1"></div>
                            </div>
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-5">{store.profile.correo === null ? <p><b>Confirma Tu eMail</b></p> : <h4> {store.profile.email}</h4>}</div>
                                <div className="col-6"></div>
                            </div>

                        </div>
                    </div>
                    </>
                }

            </div>
        </>
    );
};