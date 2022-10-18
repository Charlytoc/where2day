import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";
import "../../styles/home.css";
import { Feed } from "../component/feed";


export const InfoUsuario = () => {
	const { store, actions } = useContext(Context);

	return (
		<Feed />

	);
};
