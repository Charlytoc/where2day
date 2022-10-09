import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";


export const Feed = () => {
	const { store, actions } = useContext(Context);


	return (
    <><div className="container w-50 text-center mt-3">
        <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea">Comments</label>
</div>
    </div>
    </>
    );
};
