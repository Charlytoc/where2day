import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Usare para las redirigir al usuario al cambiar status de "auth: false" a "auth: true"
import { Navigate } from "react-router-dom";
import { useContext } from "react"; // #1 Traer context de react
import { Context } from "./store/appContext"; // #2 traer nuestro context

import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup.jsx";
import { ErrorPage } from "./pages/errorPage";
import { Reset } from "./pages/resetPassword";

import { Feed } from "./pages/feed.js";
import { UserProfile } from "./pages/userProfile.js";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import injectContext from "./store/appContext";
// import { Single } from "./pages/single";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  const { store } = useContext(Context); // #3 Consumirlo

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>

          <Navbar />
          <Routes>
            <Route element={store.auth ? <Navigate to="/feed" /> : <Home />} path="/" />
            {/* <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" /> */}
            {/* <Route element={<Signup />} path="/signup" /> */}

            <Route
              element={store.redirectLogin ? <Navigate to="/login" /> : <Signup />}
              path="/signup"
            />


            {/* Este es la ruta LOGIN condicional, si el usuario se regista exitosamente redirigira al feed */}
            <Route
              element={store.auth ? <Navigate to="/feed" /> : <Login />}
              path="/login"
            />

            <Route
              element={!store.auth ? <Navigate to="/" /> : <Feed />}
              path="/feed"
            />

<Route
              element={!store.auth ? <Navigate to="/" /> : <UserProfile />}
              path="/userProfile"
            />

            <Route element={<Reset />} path="/reset" />

            <Route element={<ErrorPage />} path="*" />

          </Routes>
          <Footer />

        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
