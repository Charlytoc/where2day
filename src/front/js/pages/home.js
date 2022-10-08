import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";
import "../../styles/home.css";
import { Signup } from "../component/signup";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Signup />

	);
};
