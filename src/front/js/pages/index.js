import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";
// import { Signup } from "../component/signup";
import { Categorias } from "../component/categorias";
import {Feed} from "../component/feed"

export const Index = () => {
	const { store, actions } = useContext(Context);

	return (<>
    <Categorias /><Feed /></>);
};
