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
			redi_to_log: false
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
				console.log(store.auth)

            },
			postear: (titulo, lugar, description) => {
                
				
                fetch('https://3001-charlytoc-where2day-yz3hd6qxae3.ws-us70.gitpod.io/api/postear', {
                        method: "POST",
                        body: JSON.stringify({
                            titulo: titulo,
                            lugar: lugar,
							description: description,
							usuario_id: 1
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
