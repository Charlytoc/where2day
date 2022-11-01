import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logoPres from "../../img/Logo WHERE2DAY.png";

import { useContext } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context

export const InfoProfile = (props) => {
    const { store, actions } = useContext(Context); // #3 Consumirlo

    return (
        <>     
            <li className="hand list-group-item border" > {props.title} </li>  
        </>
    );
};
