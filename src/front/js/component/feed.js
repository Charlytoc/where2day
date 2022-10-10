import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";


export const Feed = () => {
	const { store, actions } = useContext(Context);


	return (
    <><p>Yo seré un post cualquiera</p>
    </>
    );
};
