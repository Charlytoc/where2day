import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";
// import { Signup } from "../component/signup";
import { Categorias } from "../component/categorias";
import {Feed} from "../component/feed"
import { Post } from "../component/post";

export const Index = () => {
	const { store, actions } = useContext(Context);

	return (<>
    <div className="container w-25 float-start bg-warning"><Categorias /></div>
	<div className="container w-50"><Post /><Feed /></div>
	</>);
};
