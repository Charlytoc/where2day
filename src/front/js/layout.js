import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Index } from "./pages/index";
import { Context } from "./store/appContext"

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Feed } from "./component/feed";



//create your first component
const Layout = () => {

    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    const {store} = useContext(Context)

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={store.auth ? <Navigate to="/index" /> : <Home />} path="/" />
                        {/* <Route element={ !store.auth ? <Navigate to="/"/> : <Index />} path="/index" /> */}
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Index />} path="/index" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
