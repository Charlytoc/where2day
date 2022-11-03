import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo-where2-alone.png";
import logoPres from "../../img/Logo WHERE2DAY.png";
const Swal = require("sweetalert2")

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
import { faMessage } from '@fortawesome/free-solid-svg-icons'


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


    const [desplegar, setDesplegar] = useState(false)
    const desplegarEdit = () => {
        desplegar ? setDesplegar(false) : setDesplegar(true)
        // console.log(desplegar)
    }

    
    useEffect(() => {
        actions.getPostOwner(props.expOwner);
    }, []);
    // }

    // Funcion para llamar al fetch del flux y postear con las variables anteriores
    const editExperiencia = () => {
        setDesplegar(false)

        actions.editExp(titulo, props.exp_id, lugar, description, fecha, outdoor, indoor, anywhere, image)

    }


    return (
        <>
            <div className="container border p-0 m-0">
                <div className="row">
                    <div className="col-3">
                        <img src={store.profilePost.image_url} className="rounded w-100" />
                    </div>
                    <div className="col-7">
                        <p className="m-0 p-0 mt-1 fs-6">{props.title}</p>
                        <p className="m-0 p-0 text-secondary"><FontAwesomeIcon icon={faLocation} /> {props.lugar}</p>
                    </div>
                    <div className="col-2">
                        <button className="btn mt-3 border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faGear} />
                        </button>
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
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-4"></div>
                    <div className="col-4">

                    </div>
                </div>
            </div>

            <div className=" card ">
                {/* <button onClick={mostrar}> TE MUESTRO LOS BOOLEANOS</button> */}

                {/* Empieza el booleano desplegarEdit, depende si true o false */}
                {/* Mostraremos entonces el INPUT para editar o SOLO el Post normal */}
                {desplegar ?
                    <>
                        <div className="card-header d-flex justify-content-between">
                            <input onChange={(e) => { setTitulo(e.target.value) }} value={titulo}
                                type="text" className="mt-1 form-control" />
                            {props.expOwner === store.usuario_actual
                                &&
                                <button className="btn" onClick={desplegarEdit}> 🖊</button>}
                        </div>
                        <div className="text-center"><img src={props.image_url} className="w-75"></img></div>
                        <div className="container text-center">
                            {/* Input de Lugar */}
                            <input onChange={(e) => { setLugar(e.target.value) }} value={lugar}
                                type="text" className="mt-1 form-control" />

                            {/* Input de Fecha */}
                            <input onChange={(e) => { setFecha(e.target.value) }} value={fecha}
                                type="text" className="mt-1 form-control" />

                            {/* Aca vienen los booleanos editables */}
                            <div className="d-flex text-center justify-content-center text-dark bg-light">
                                <input className="mt-1 form-check-input float-start"
                                    onClick={() => { outdoor ? setOutdoor(false) : setOutdoor(true) }}
                                    type="checkbox" value={outdoor} />

                                <label className=" form-check-label float-start" htmlFor="flexCheckDefault">
                                    Outdoor
                                </label>

                                <input onClick={() => { indoor ? setIndoor(false) : setIndoor(true) }}
                                    className=" mt-1 form-check-input" type="checkbox" value={indoor} />

                                <label className=" form-check-label" htmlFor="flexCheckDefault">
                                    Indoor
                                </label>

                                <input onClick={() => { anywhere ? setAnywhere(false) : setAnywhere(true) }}
                                    className="form-check-input float-end" type="checkbox" value={anywhere} />

                                <label className="form-check-label float-end" htmlFor="flexCheckDefault">
                                    Anywhere
                                </label>
                            </div>



                            {/*Input Description  */}
                            <input onChange={(e) => { setDescription(e.target.value) }}
                                value={description} type="text" className="mt-1 form-control" />
                        </div>

                        <button className=" btn-outline border-0 rounded btn-lg navarra animable2 mb-3 boton3 mt-0"
                            onClick={editExperiencia}>
                            Edit Post
                        </button>
                    </>
                    :
                    <>
                        <div className="card">
                            <div className="card-header bg-yellw2d"></div>
                            <div className="header-profile d-flex">
                                <div className="header-left">
                                    <img
                                        className="profile-pic-post rounded-circle"
                                        width={55}
                                        height={55}
                                        src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        alt="profile" />
                                    <div>
                                        <h5 >{props.title}</h5>
                                        <p className="text-dark text-center d-inline-block" title="Lugar">
                                            <FontAwesomeIcon icon={faLocation} /> {props.lugar} </p>
                                    </div>
                                </div>
                                <div className="header-right">
                                    <div className="edit-icon">
                                        {props.expOwner === store.usuario_actual
                                            &&
                                            <>
                                                <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                    <FontAwesomeIcon icon={faGear} />
                                                </button>
                                                <div className="collapse" id="collapseExample">

                                                    <button className="btn" onClick={desplegarEdit}> <FontAwesomeIcon icon={faPen} /> </button>
                                                    <button className="btn" onClick={() => actions.delete(props.exp_id, "exp")}><FontAwesomeIcon icon={faX} /></button>

                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="text-center"><img src={props.image_url} className="img-fluid"></img></div>
                            <div className="descripcion-post">
                                <h4 className="text-dark text-center d-inline-block" title="Fecha"><FontAwesomeIcon icon={faCalendar} /> {props.fecha} </h4>
                                {outdoor ? <h4 className="text-dark text-center d-inline-block" title="Outdoor"><FontAwesomeIcon icon={faPersonHiking} /> Outdoor</h4> : null}
                                {indoor ? <h4 className="text-dark text-center d-inline-block" title="Indoor"><FontAwesomeIcon icon={faHouseUser} />Indoor</h4> : null}
                                {anywhere ? <h4 className="text-dark text-center d-inline-block" title="On-line"> <FontAwesomeIcon icon={faLaptopCode} />On-line</h4> : null}
                                <h4 className="text-dark text-center d-inline-block" title="Whatsapp"><FontAwesomeIcon icon={faMessage} /> </h4>
                            </div>
                            {props.expOwner === store.usuario_actual ? <>

                            </> : null}
                            <p className="text-dark text-center fs-6 p-5">{props.description}</p>
                        </div>
                    </>
                }
            </div>
        </>
    )
}
