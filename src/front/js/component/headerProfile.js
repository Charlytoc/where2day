import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const HeaderProfile = () => {
    const { store, actions } = useContext(Context); // #3 Consumirlo

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



    useEffect(() => {

        actions.getUserProfile();


    }, []);

    //   console.log(`Email: ${email} 
    //   Password: ${password} 
    //   Username: ${username} 
    //   Edad ${edad}
    //   Pais ${pais}
    //   Nombre: ${nombre}
    //   Apellido: ${apellido}`)

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
                                src={store.profile.image_url}
                                alt="profile"
                            />

                            <div className="info-profile">
                                <input onChange={(e) => { uploadImage(e) }}
                                    type="file" className="mt-1 form-control justify-content-center text-center" />
                                <input onChange={(e) => { setUsername(e.target.value) }} value={username} placeholder="Username"
                                    type="text" className="mt-1 form-control justify-content-center text-center" />
                                <input onChange={(e) => { setPais(e.target.value) }} value={pais} placeholder="País"
                                    type="text" className="mt-1 form-control justify-content-center text-center mb-2" />
                            </div>

                        </div>
                        <div className="col-7 justify-content-center text-center">

                            <input onChange={(e) => { setNombre(e.target.value) }} value={nombre} placeholder="Ingresa Tu Nombre"
                                type="text" className="mt-1 form-control justify-content-center text-center" />
                            <input onChange={(e) => { setApellido(e.target.value) }} value={apellido} placeholder="Ingresa Tu Apellido"
                                type="text" className="mt-1 form-control justify-content-center text-center" />
                            <input onChange={(e) => { setEdad(e.target.value) }} value={edad} placeholder="Ingresa tu edad"
                                type="text" className="mt-1 form-control justify-content-center text-center" />
                            <input onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Ingresa tu correo"
                                type="text" className="mt-1 form-control justify-content-center text-center" />
                            <input onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Introduce Tu Contraseña Aqui"
                                type="password" className="mt-1 form-control justify-content-center text-center" />
                        </div>

                        <div className="header-info col-2">
                            <button className="btn navarra fa-regular" onClick={editProfile}>
                                <FontAwesomeIcon icon={faPen} />
                                Editar perfil
                            </button>
                            <button className="btn navarra fa-regular mt-2" onClick={submitChanges}>
                                <FontAwesomeIcon icon={faPen} />
                                Guardar cambios
                            </button>
                        </div>
                    </div>
                    :
                    <div className="cover-body d-flex justify-content-between align-items-center px-5 row ">
                        <div className="col-3 container">
                            <img
                                className="profile-pic rounded-circle justify-content-center"
                                width={150}
                                height={150}
                                src={store.profile.image_url}
                                alt="profile"
                            />
                            <div className="info-profile justify-content-center text-center">

                                {/* Si el usuario NO TIENE un userna/pais/etc, entonces hacemos ternario 
                         Para solicitarle/que sea evidente que esta NULL y debe rellenar ese campo */}
                                {store.profile.username === null ? <p><b>Elije Un Username</b></p> : <h5 className="profile-name text-black">{store.profile.username}</h5>}
                                {store.profile.pais === null ? <p><b>Elije Tu Ubicacion</b></p> : <h6 className="profile-name text-black">{store.profile.pais}</h6>}
                            </div>

                        </div>
                        {/* UN COL-4 ACA ARRIBA */}
                        {/* UN COL ACA ABAJO*/}
                        <div className="col-6 justify-content-center">
                            {store.profile.nombre === null ? <p><b>Confirma Tu Nombre</b></p> : <h2> {store.profile.nombre}</h2>}
                            {store.profile.apellido === null ? <p><b>Confirma Tu Apellido</b></p> : <h2> {store.profile.apellido}</h2>}
                            {store.profile.edad === null ? <p><b>Confirma Tu Edad</b></p> : <h2> {store.profile.edad}</h2>}
                            {store.profile.correo === null ? <p><b>Confirma Tu eMail</b></p> : <h4> {store.profile.email}</h4>}
                            <p> Change Your Password: ***** </p>
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