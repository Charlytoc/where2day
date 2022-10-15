const getState = ({ getStore, getActions, setStore }) => {
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
        try{
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
        if (response.status === 401){
          // console.log(response)
          alert('Wrong eMail or Password, please try again');
          setStore({auth:false});
        }else{
        const data = await response.json()
        console.log(data)
        setStore({ auth: true });
        const store = getStore();
        console.log(store.auth)
        return true;    
        }
        // Caso contrario SI PONEMOS EL auth:true
      } 
      // Ahora... Si el TRY NO SIRVIO, entonces INMEDIATAMENTE HAREMOS UN CATCH
      // El catch NOS DIRA donde viene el error o porque el async/await no sirvio
      catch(error){
        if(error.msg === 'Bad email or password'){
          alert(error.msg);
        }
        setStore({auth:false});
          console.log(error);
      }

        // // Hago un console log SOLO para verificar si el Status se cambia a "True" en el Auth
        // const store = getStore();
        // console.log(store.auth)
      },

      signup: (email, password) => {
        
        fetch(process.env.BACKEND_URL + "/api/signup", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      },

      logout: () => {
        setStore({ auth: false });
        const store = getStore();
        console.log(store.auth);
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
