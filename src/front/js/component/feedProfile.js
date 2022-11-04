import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";
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


import { useContext, useState } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const FeedProfile = () => {
    const { store, actions } = useContext(Context); // #3 Consumirlo

    const [indoor, setIndoor] = useState(store.profile.indoor)
    const [outdoor, setOutdoor] = useState(store.profile.outdoor)
    const [anywhere, setAnywhere] = useState(store.profile.anywhere)


    // console.log(store.post)
    return (
        <>
            <div className="row m-0">
                <div className="col-3 container">
                    <img src={store.profile.image_url} className="rounded img-thumbnail mt-4 w-75" />
                </div>
                <div className="col-7">
                    <p className="m-0 p-0 mt-3 fs-5">{store.post.titulo}</p>
                    <p className="m-0 p-0 text-secondary"><FontAwesomeIcon icon={faLocation} /> {store.post.lugar}</p>
                </div>
                <div className="col-2">

                </div>
            </div>
            <div className="row">
                <img src={store.post.image_url} />
            </div>
            <div className="row p-2">

                <div className="col-4 fs-5 d-flex h-100">
                    {outdoor ? <> <p className="ms-2 h-100"><FontAwesomeIcon title="Fuera de casa" className="mt-1" icon={faPersonHiking} /> Outdoor</p></> : null}
                    {indoor ? <><FontAwesomeIcon title="Dentro de casa" icon={faHouseUser} /><p className="ms-2">Indoor</p></> : null}
                    {anywhere ? <> <FontAwesomeIcon title="Online" icon={faLaptopCode} /><p className="ms-2">Online</p></> : null}
                </div>
                <div className="col-4 fs-5 justify-content-center text-center h-100">
                    <p className="float-end"><FontAwesomeIcon title="Fecha" className="float-end ms-2" icon={faCalendar} /> {store.post.fecha} </p>
                </div>
                <div className="col-4 fs-5 container-flex h-100">

                    {/* <button onClick={realizarEsto} title="Realizar más tarde" className="btn click float-end"><FontAwesomeIcon icon={faBookmark} /></button> */}
                    {/* <button onClick={()=>{likear()}} title="Darle like" className="btn click float-end"><FontAwesomeIcon icon={faHeart} /></button> */}
                    <p className="d-inline float-end"></p>
                </div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10"><p className="text-dark text-center fs-6 p-5">{store.post.descripcion}</p></div>
                <div className="col-1"></div>
            </div>
        </>
    );
};