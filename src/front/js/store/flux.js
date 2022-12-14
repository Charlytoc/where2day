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
      post: {
      },
      profile: {},
      feed: "",
      profilePost: {},
      todos: [],
      likes: 0
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

      actualizarPost: (post) => {
        setStore({post: post})

      },

      likes: (lik) => {
        setStore({likes: lik})
      },

      likear: () => {
        const store = getStore()
        setStore({likes: (store.likes + 1)})
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

      delete: async (id, exp_or_event) => {
        try {
          const url = process.env.BACKEND_URL + "/api/delete"
          const resp = await axios.post(url, {
            id: id,
            exp_or_event: exp_or_event
          })
          console.log(resp.data)

          getActions().loadExperiencias()

        }
        catch (error) {console.log(error)}
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
          .then((data) => {setStore({ feedExperiencias: data.results.reverse() }), setStore({feed: data.filter})});
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
          .then((data) => {setStore({ usuario_actual: data }), getActions().getTodos()});
      },

      postear: ( titulo, lugar,description, fecha,outdoor,indoor,anywhere, image) => {
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
            imagen: image
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

         editExp: ( titulo, exp_id, lugar, description, fecha, outdoor,indoor,anywhere, image) => {
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
              image_url: image
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
             setStore({feed: resp.data.filter})
             console.log("chato ??ay")
           }
           else {
             const resp = await axios.post(process.env.BACKEND_URL + "/api/filtrarExp", {
               variable: variable
             })
             setStore({feedExperiencias: resp.data.results})
             setStore({feed: resp.data.filter})
             console.log("chato")
           }
           
          }
          catch (error) {console.log(error)}
        },


        // editUser: ( email, password, username, nombre, apellido, edad) => {
          editUser: (email, password, username, nombre, apellido, edad, pais) => {
          const store = getStore();
  
          fetch(process.env.BACKEND_URL + "/api/updateUser", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              username: username,
              nombre: nombre,
              apellido: apellido,
              edad: edad,
              pais: pais,
              usuario_id: store.usuario_actual,
              
              // imagen: "some image link"
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {console.log(data), getActions().getUserProfile(store.usuario_actual)});
            // .then((data) => console.log(data));
        },
        getTodos: async () => {
          try{
              const store = getStore()
              const url = (process.env.BACKEND_URL + "/api/todos")
              const resp = await axios.post(url, {user_id: store.usuario_actual})
              
              setStore({todos: resp.data.todos})

              // console.log(store.todos)

          }
          catch (err) {console.log(err)
      
          }
        },


        getPostOwner: async (id) => {
          try{ 
            const store = getStore();
            const url = (process.env.BACKEND_URL + "/api/getProfile")
            
            // const formData = new FormData()
            // formData.append("usuario_id", store.usuario_actual)
            const response = await axios.post(url, {usuario_id: id})  
            setStore({profilePost: response.data.results})
            // console.log(store.profilePost)
            }

            catch(error){
            console.log(error)
          }

        },

        // getLikes: async (exp) => {
        //   try {
        //       const url = (process.env.BACKEND_URL + "/api/likes")
        //       const resp = await axios.post(url, {
        //           exp_id: exp
        //       })
        //       console.log(resp.data)
        //       // const resp = 
        //   }
        //   catch (err) {console.log(err)}
        // },

        getOneExp: async (exp_id) => {
          try {
            const store = getStore();
            const url = (process.env.BACKEND_URL + "/api/getExp")
            const resp = await axios.post(url, {exp_id: exp_id})
            console.log(resp.data.exp)
            setStore({feedExperiencias: [resp.data.exp]})
            setStore({feed: "Qu?? esperas para realizar:"})
          }
          catch(err) {console.log(err)}
        },

        getUserProfile: async (id) => {
          try{ 
            const store = getStore();
            const url = (process.env.BACKEND_URL + "/api/getProfile")
            const response = await axios.post(url, {usuario_id: id})
            
            setStore({profile: response.data.results})
            let idUser = response.data.results.id
            getActions().filtrarExperiencias(idUser)
            }

            catch(error){
            console.log(error)
          }

        },
    },
  };
};



export default getState;
