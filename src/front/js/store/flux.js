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
				console.log("funciono")
              
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
                        // console.log(store.auth)
                        return response.json()})
                    .then((data) => localStorage.setItem("token", data.access_token))

            },
			logout: () => {
				// getStore(store)
                localStorage.removeItem('token');
                setStore({auth: false})
				// console.log(store.auth)

            },
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
