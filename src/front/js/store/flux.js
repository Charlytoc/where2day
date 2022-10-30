import axios from 'axios';
const Swal = require("sweetalert2")

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      auth: false,

      mostrarEventos: [],
      feedExperiencias: [],
      usuario_actual: 0,
      redirectLogin: false,
    },
    actions: {
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
      
      // Aca autenticaremos al usuario si localStorage.getItem ("token") NO esta vacio, quiere decir
      // que YA tenemos un JWT, por lo tanto el usuario esta verificado, y podemos autenticarle
      autenticar: () =>{
        localStorage.getItem("token") ? setStore({auth: true}) : setStore({auth: false})
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
            Swal.fire({
              icon: "error",
              title: "Oops... Something went wrong!",
              text: "Make sure you are using the correct eMail and/or Password",
            });
          } else {
            // esperamos el response y lo igualamos a "data"
            const data = await response.json();
            console.log(data);

            // si el mesanje es DISTINTO a "bad email or password"
            // entonces el usuario esta AUTENTICADO y lo verificamos
            if (data.msg !== "Bad email or password") {
              localStorage.setItem("token", data.access_token);
              getActions().autenticar();

              // Sino, entonces quiere decir que hubo un correo/password
              // erroneo, y se le notifica del mismo al usuario
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops... Something went wrong!",
                text: "Make sure you are using the correct eMail and/or Password",
              });
            }

            // console.log("Aca quiero verificar si tenemos el TOKEN guardado ya o no " + localStorage.getItem("token"))
            // const store = getStore();
            // console.log(store.auth)
            return true;
          }
          // Caso contrario SI PONEMOS EL auth:true
        } catch (error) {
          // Ahora... Si el TRY NO SIRVIO, entonces INMEDIATAMENTE HAREMOS UN CATCH
          // El catch NOS DIRA donde viene el error o porque el async/await no sirvio
          // if (error.msg === "Bad email and password") {
          // }
          Swal.fire({
            icon: "error",
            title: "Oops... Something went wrong!",
            text: "Make sure you are using the correct eMail and/or Password",
          });
          setStore({ auth: false });
          console.log(error);
        }
      },

      // EL ASYNC SIEMPRE DEBE IR ACOMPA:ADO DE UN AWAIT, es como un "if/else", son dependientes
      signup: async (email, password) => {
        const store = getStore();
        // el try INTENTARA hacer lo que se encuentra entre "{}", SINO funciona, omite la logica que ahi se encuentra
        try {
          const response = await axios.post(
            process.env.BACKEND_URL + "/api/signup",
            {
              email: email,
              password: password,
            }
          );
          // Una vez que funciono el "try" y los datos se trajeron, entonces
          // Hacemos un if/else con el status recibido

          if (response.status === 200) {
            setStore({ redirectLogin: true });
            // Esto es SINONIMO de ALERT, pero mas "elegante"
            Swal.fire(
              "Te Has Registrado Exitosamente!",
              "Se ha enviado un correo, por favor sigue los pasos!",
              "success"
            );
          }
        } catch (error) {
          // Ahora... Si el TRY NO SIRVIO, entonces INMEDIATAMENTE HAREMOS UN CATCH
          // El catch NOS DIRA donde viene el error o porque el async/await no sirvio
          console.log("Error loading message from backend", error);
          Swal.fire(
            error.response.data,
            "Por favor utiliza otro eMail/Password, o ve a login y usa el correo ya registrado.",
            "error"
          );
        }
      },

      logout: () => {
        setStore({ auth: false });
        const store = getStore();
        localStorage.removeItem("token");
        // console.log("Este es el status actual de auth al clickear en logout " + store.auth);
      },

      //FETCH PARA MOSTRAR LO QUE ESTA EN LA BASE DE DATOS EXPERIENCIAS
      loadExperiencias: () => {
        fetch(process.env.BACKEND_URL + "/api/leerPost")
          .then((response) => response.json())
          .then((data) => setStore({ feedExperiencias: data.results.reverse() }));
        // setStore({charactersCard: data.results}))
      },

      //FETCH PARA MOSTRAR LO QUE ESTA EN LA BASE DE DATOS EVENTOS
      loadEventos: () => {
        fetch(process.env.BACKEND_URL + "/api/leerEventos")
          .then((response) => response.json())
          .then((data) =>
            setStore({
              mostrarEventos: data.results,
            })
          );
      },

      obtenerUsuario: () => {
        // console.log("funciono desde el flux");
        let token = localStorage.getItem("token");

        fetch(process.env.BACKEND_URL + "/api/getuser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
          .then((response) => response.json())
          .then((data) => setStore({ usuario_actual: data }));
      },

      postear: ( titulo, lugar,description, fecha,outdoor,indoor,anywhere) => {
        const store = getStore();

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
            anywhere: anywhere,
            imagen: "some image link"
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {console.log(data), getActions().loadExperiencias()} 
          );
      },

      postearEvento: (titulo, lugar, description, usuario_id, fecha, outdoor, indoor, anywhere) => {
        const store = getStore()	
        fetch   (process.env.BACKEND_URL + "/api/postearEvento", 	{
          method: "POST",
          body: JSON.stringify(	{
            titulo		: titulo,
            lugar	        : lugar,
            description	: description,
            usuario_id 	: store.usuario_actual,
            fecha	  	: fecha,
            outdoor		: outdoor,
            indoor		: indoor,
            anywhere	: anywhere,
                             }),	
          headers:{
            'Content-Type': 'application/json'
                   }					
                                                                    })
            .then ((response) => response.json())
            .then ((data) => console.log(data))
         },

         editExp: ( titulo, exp_id, lugar, description, fecha, outdoor,indoor,anywhere) => {
          const store = getStore();
  
          fetch(process.env.BACKEND_URL + "/api/updateExp", {
            method: "POST",
            body: JSON.stringify({
              titulo: titulo,
              exp_id: exp_id,
              lugar: lugar,
              description: description,
              usuario_id: store.usuario_actual,
              fecha: fecha,
              outdoor: outdoor,
              indoor: indoor,
              anywhere: anywhere,
              // imagen: "some image link"
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {console.log(data), getActions().loadExperiencias()});
        },

        
        filtrarExperiencias: async (variable) => {
          try {

           if (!isNaN(variable)) {
             const resp = await axios.post(process.env.BACKEND_URL + "/api/filtrarExp", {
               user: variable
             })
             setStore({feedExperiencias: resp.data.results})
             console.log("chato ñay")
           }
           else {
             const resp = await axios.post(process.env.BACKEND_URL + "/api/filtrarExp", {
               variable: variable
             })
             setStore({feedExperiencias: resp.data.results})
             console.log("chato")
           }
           
          }
          catch (error) {console.log(error)}
        },


        // editUser: ( username, email, nombre, apellido, edad, password) => {
        //   const store = getStore();
  
        //   fetch(process.env.BACKEND_URL + "/api/editUser", {
        //     method: "POST",
        //     body: JSON.stringify({
        //       username: username,
        //       email: email,
        //       nombre: nombre,
        //       apellido: apellido,
        //       edad: edad,
        //       password: password,
        //       usuario_id: store.usuario_actual,
              
        //       // imagen: "some image link"
        //     }),
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   })
        //     .then((response) => response.json())
        //     .then((data) => {console.log(data), getActions().loadExperiencias()});
        // },
    },
  };
};



export default getState;
