const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ],
			auth: false,
			redi_to_log: false,
			usuario_actual: 0
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			
			login: (email, password) => {
				
				const store = getStore()
				// console.log(store.auth)

                fetch(process.env.BACKEND_URL + "/api/login", {
                        method: "POST",
                        body: JSON.stringify({
                            email: email,
                            password: password
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then((response) => {
                        setStore({auth: true})
                        return response.json()})
                    .then((data) => localStorage.setItem("token", data.access_token))

            },
			logout: () => {
				const store = getStore()
                localStorage.removeItem('token');
                setStore({auth: false})
				setStore({usuario_actual: 0})
				console.log(store.auth)

            },
			obtenerUsuario: () => {
                
				let token = localStorage.getItem("token")
				
                fetch(process.env.BACKEND_URL + "/api/usuario", {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json',
							'Authorization': "Bearer "+token
                        }
                    })
                    .then((response) => response.json())
                    .then((data) => setStore({usuario_actual : data.usuario}))},
					
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
                    .then((data) => console.log(data))},

			signup: (email, password) => {
                // setStore({redi_to_log: true})
				// console.log(redi_to_log)
                console.log("Sí funciono")
				
                fetch(process.env.BACKEND_URL + "/api/signup", {
                        method: "POST",
                        body: JSON.stringify({
                            email: email,
                            password: password
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then((response) => response.json())
                    .then((data) => console.log(data))}}
	};
};

export default getState;
