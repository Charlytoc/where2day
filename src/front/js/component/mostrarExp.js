import React, { useState, useEffect } from "react";
const Swal = require("sweetalert2")
import axios from "axios";
import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faPersonHiking } from '@fortawesome/free-solid-svg-icons'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


export const MostrarExp = (props) => {

    const { store, actions } = useContext(Context); // #3 Consumirlo

    // ACA LLAMAMOS LA FUNCION QUE HACE EL FETCH QUE VA TRAER LAS EXPERIENCIAS QUE TENEMOS DB

    const [titulo, setTitulo] = useState(props.title)
    const [lugar, setLugar] = useState(props.lugar)
    const [fecha, setFecha] = useState(props.fecha)
    const [description, setDescription] = useState(props.description)

    const [indoor, setIndoor] = useState(props.indoor)
    const [outdoor, setOutdoor] = useState(props.outdoor)
    const [anywhere, setAnywhere] = useState(props.anywhere)
    const [image, setImage] = useState(props.image_url)
    const [likes, setLikes] = useState(props.likes)


    const [desplegar, setDesplegar] = useState(false)
    const desplegarEdit = () => {
        desplegar ? setDesplegar(false) : setDesplegar(true)
        // console.log(desplegar)
    }

    
  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "pruebas")

    const res = axios.post("https://api.cloudinary.com/v1_1/dlmcf8yed/image/upload", data)
    res.then((data) => setImage(data.data.secure_url))
  }

  const realizarEsto = async () => {
    try {
        const url = (process.env.BACKEND_URL + "/api/actividad")
        const resp = await axios.post(url, {
            user_id: store.usuario_actual,
            exp_id: props.exp_id
        }).then(()=>{actions.getTodos()})
        console.log(resp.data)
        // const resp = 
    }
    catch (err) {console.log(err)}
    
  }


  const likear = async () => {
    try {
        const url = (process.env.BACKEND_URL + "/api/likear")
        const resp = await axios.post(url, {
            user_id: store.usuario_actual,
            exp_id: props.exp_id
        })
        // console.log(resp.data)
        setLikes(likes + parseInt(resp.data))

    }
    catch (err) {console.log(err)}
  }

    useEffect(() => {
        actions.getPostOwner(props.expOwner);
        actions.likes(props.likes)
    }, []);
    // }

    // Funcion para llamar al fetch del flux y postear con las variables anteriores
    const editExperiencia = () => {
        setDesplegar(false)

        actions.editExp(titulo, props.exp_id, lugar, description, fecha, outdoor, indoor, anywhere, image)

    }
    const selected = 'selected'

    return (
        <>
            <div className="container border p-0 m-0 my-5">
                {desplegar ?
                    <>  
                        <div className="row">
                            <div className="col-12 container">
                                <p className="fs-4 text-center">Editar post</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 container">
                            <img src={store.profilePost.image_url} className="rounded img-thumbnail w-75" />
                            </div>
                            <div className="col-7 container-flex">
                                <input onChange={(e) => { setTitulo(e.target.value) }} placeholder="Título" value={titulo}
                                type="text" className="m-0 mt-2 p-0 w-100 fs-5 form-control border-0" />
                                <FontAwesomeIcon className="float-start" icon={faLocation} />
                                <input onChange={(e) => { setLugar(e.target.value) }} value={lugar}
                                type="text" className="m-0 p-0 w-75 text-secondary form-control border-0" />
                                {/* <input onChange={(e) => { setFecha(e.target.value) }} value={fecha}
                                type="text" placeholder="Fecha" className="m-0 p-0 w-75 text-secondary form-control border-0" /> */}
                                
                                 {/* <p className="m-0 p-0 text-secondary"> {props.lugar}</p> */}
                                 </div>
                            <div className="col-2">
                            <button className="btn" onClick={desplegarEdit}><FontAwesomeIcon icon={faPen} />  Cerrar</button>
                             </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                            <img className="w-100" src={image} />
                            <input className=" form-control" type="file" onChange={(e) => { uploadImage(e) }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4"><button className={indoor ? `btn btn-md navarra ${selected}` : "btn btn-md "} onClick={() => { indoor ? setIndoor(false) : setIndoor(true) }}>Indoor</button></div>
                            <div className="col-4"><button className={outdoor ? `btn btn-md navarra ${selected}` : "btn btn-md "} onClick={() => { outdoor ? setOutdoor(false) : setOutdoor(true) }}>Outdoor</button></div>
                            <div className="col-4"><button className={anywhere ? `btn btn-md navarra ${selected}` : "btn btn-md "} onClick={() => { anywhere ? setAnywhere(false) : setAnywhere(true) }}>Anywhere</button></div>
                        </div>
                        <div className="row">
                            <div className="col-1"></div>
                           <div className="col-10"> <textarea  onChange={(e) => { setDescription(e.target.value) }}
                                value={description} type="text" className="m-0 p-0 w-100 form-control border-0" /></div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6 container text-center">
                            <button className=" btn-outline border-0 rounded btn-lg click animable2 mb-3 boton3 mt-0"
                            onClick={editExperiencia}>
                            Guardar cambios
                        </button>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </>
                    :
                    <>
                    <div className="row m-0">
                    <div className="col-3 container">
                        <Link to={`/userProfile/${props.expOwner}`}>
                        <img src={props.imageOwner} className="rounded img-thumbnail w-75" />
                        </Link>
                    </div>
                    <div className="col-7">
                        <p className="m-0 p-0 mt-3 fs-5">{props.title}</p>
                        <p className="m-0 p-0 text-secondary"><FontAwesomeIcon icon={faLocation} /> {props.lugar}</p>
                    </div>
                    <div className="col-2">
                    {props.expOwner === store.usuario_actual ? <>
                        <button className="btn mt-3 border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faGear} />
                        </button></> : null}
                        <ul className="dropdown-menu">
                        <li>
                        <button className="btn" onClick={desplegarEdit}><FontAwesomeIcon icon={faPen} />  Editar</button>
                        </li>
                        <li>
                        <button className="btn" onClick={() => actions.delete(props.exp_id, "exp")}><FontAwesomeIcon icon={faX}/>  Eliminar</button>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <img src={props.image_url} />
                </div>
                <div className="row p-2">

                    <div className="col-4 fs-5 d-flex h-100">
                    {outdoor ? <> <p className="ms-2 h-100"><FontAwesomeIcon title="Fuera de casa"  className="mt-1" icon={faPersonHiking} /> Outdoor</p></> : null}
                    {indoor ? <><FontAwesomeIcon title="Dentro de casa"  icon={faHouseUser} /><p className="ms-2">Indoor</p></> : null}
                    {anywhere ? <> <FontAwesomeIcon title="Online"  icon={faLaptopCode} /><p className="ms-2">Online</p></> : null}
                    </div>
                    <div className="col-4 fs-5 justify-content-center text-center h-100">
                    <p className="float-end"><FontAwesomeIcon title="Fecha" className="float-end ms-2" icon={faCalendar} /> {props.fecha} </p>
                    </div>
                    <div className="col-4 fs-5 container-flex h-100">
                        
                    <button onClick={realizarEsto} title="Realizar más tarde" className="btn click float-end"><FontAwesomeIcon icon={faBookmark} /></button>
                    <button onClick={()=>{likear()}} title="Darle like" className="btn click float-end"><FontAwesomeIcon icon={faHeart} /></button>
                    <p className="d-inline float-end">{likes}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10"><p className="text-dark text-center fs-6 p-5">{props.description}</p></div>
                    <div className="col-1"></div>
                </div>
                    </>
                }
            </div>
        </>
    )
}
