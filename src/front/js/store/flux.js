const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            // message: null,
            // // demo: [
            // //   {
            // //     title: "FIRST",
            // //     background: "white",
            // //     initial: "white",
            // //   },
            // //   {
            // //     title: "SECOND",
            // //     background: "white",
            // //     initial: "white",
            // //   },
            // // ],

            auth: false,
            usuario_actual: 0,
            redirectLogin: false,

            mostrarEventos: [],

        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({
                        message: data.message,
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },


            // EL ASYNC SIEMPRE DEBE IR ACOMPA:ADO DE UN AWAIT, es como un "if/else", son dependientes
            login: async (email, password) => {
                // el try INTENTARA hacer lo que se encuentra entre "{}", SINO funciona, omite la logica que ahi se encuentra
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/api/login", {
                        method: "POST",
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    // Una vez que funciono el "try" y los datos se trajeron, entonces 
                    // Hacemos un if/else con el status recibido

                    // Si es un 401, entonces auth:false
                    if (!response.status === 200) {
                        // console.log(response)
                        alert('Wrong eMail or Password, please try again');
                        setStore({
                            auth: false
                        });
                    } else {
                        const data = await response.json()
                        // console.log(data.access_token)
                        localStorage.setItem("token", data.access_token)
                        setStore({
                            auth: true
                        });
                        // const store = getStore();
                        // console.log(store.auth)
                        return true;
                    }
                    // Caso contrario SI PONEMOS EL auth:true
                }
                // Ahora... Si el TRY NO SIRVIO, entonces INMEDIATAMENTE HAREMOS UN CATCH
                // El catch NOS DIRA donde viene el error o porque el async/await no sirvio
                catch (error) {
                    if (error.msg === 'Bad email and password') {
                        alert('Wrong eMail or Password, please try again');
                    }
                    setStore({
                        auth: false
                    });
                    console.log(error);
                }
            },




            // EL ASYNC SIEMPRE DEBE IR ACOMPA:ADO DE UN AWAIT, es como un "if/else", son dependientes
            signup: async (email, password) => {
                // el try INTENTARA hacer lo que se encuentra entre "{}", SINO funciona, omite la logica que ahi se encuentra
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/api/signup", {
                        method: "POST",
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    // Una vez que funciono el "try" y los datos se trajeron, entonces 
                    // Hacemos un if/else con el status recibido

                    if (response.status === 200) {
                        const data = await response.json()
                        setStore({
                            redirectLogin: true
                        });
                        (alert('An email has been sent, please follow instructions'))
                    } else {
                        (alert("Este correo ya se ha registrado"))
                    }


                }
                // Ahora... Si el TRY NO SIRVIO, entonces INMEDIATAMENTE HAREMOS UN CATCH
                // El catch NOS DIRA donde viene el error o porque el async/await no sirvio
                catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            logout: () => {
                setStore({
                    auth: false
                });
                const store = getStore();
                console.log(store.auth);
            },

            obtenerUsuario: () => {
                console.log("funciono desde el flux")
                let token = localStorage.getItem("token")

                fetch(process.env.BACKEND_URL + "/api/getuser", {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': "Bearer " + token
                        }
                    })
                    .then((response) => response.json())
                    .then((data) => setStore({
                        usuario_actual: data
                    }))
            },

            postear: (titulo, lugar, description, fecha, outdoor, indoor, anywhere) => {
                const store = getStore()

                fetch(process.env.BACKEND_URL + "/api/postear", {
                        method: "POST",
                        body: JSON.stringify({
                            titulo: titulo,
                            lugar: lugar,
                            description: description,
                            usuario_id: store.usuario_actual,
                            fecha: fecha,
                            outdoor: outdoor,
                            indoor: indoor,
                            anywhere: anywhere

                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then((response) => response.json())
                    .then((data) => console.log(data))
            },

            //FETCH EVENTOS
            loadEventos: () => {
                fetch(process.env.BACKEND_URL + "/api/leerEventos")
                    .then(response => response.json())
                    .then(data => setStore({
                        mostrarEventos: data.results
                    }))
            },



            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },
        },
    };
};

export default getState;