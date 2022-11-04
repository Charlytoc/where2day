import React from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../../img/logo.png"
import { useContext, useEffect } from "react"; // #1 Traer context de react
import { Context } from "../store/appContext"; // #2 traer nuestro context
import { faX } from '@fortawesome/free-solid-svg-icons'

export const Todos = () => {

  const { store, actions } = useContext(Context); // #3 Consumirlo

  const delTodo = async (e) => {
    try {
        const url = (process.env.BACKEND_URL + "/api/deleteTodo")
        const resp = await axios.post(url, {todo_id: e})
        .then((e)=>{actions.getTodos()})
        console.log(resp.data)
    }
    catch (err) { console.log(err)}

  }

  const verExp = (e) => {
    actions.getOneExp(e)
  }

  useEffect(() => {
    actions.getTodos()
  }, [])

  
  return (
    <> 
      <div className="card shadow bg-body fijar-fil rounded my-5 float-start">
        {/* <button onClick={()=>{console.log(store.todos[0].todo_id)}}>asdasd</button> */}
        <h4 className="btn-outline mb-0 rounded p-3 text-center selected">
          Actividades por realizar
        </h4>

        <ul className="list-group list-group-flush">
          {store.todos.map((item, index) => <div key={index}  className="row mt-1 click m-0 border w-100">
            <div onClick={()=>{verExp(item.exp.id)}} className="col-3 m-0 p-2 ">
                <img className="w-100 mt-2" src={item.exp.image_url} />
            </div>
            <div onClick={()=>{verExp(item.exp.id)}} className="col-7 m-0">
                <p className="m-0">{item.exp.titulo}</p>
                <p className="m-0 mt-0 text-secondary">{item.exp.lugar}</p>
            </div>
            <div className="col-2 m-0 container">
                {/* <input className="form-check-input m-0 w-100 h-25 mt-1" type="checkbox" id="checkboxNoLabel" /> */}
                <button onClick={()=>{delTodo(item.todo_id)}} className="btn m-0 w-100 h-100 text-center">X</button>
            </div>
          </div>)}
          
        </ul>
      </div>
    </>



  )
}
