import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Context } from "../store/appContext";
import {Login} from "../views/login";

export const Navbar = () => {
		const {store, actions} = useContext(Context)
	return (
		<nav className="navbar bg-black">
		<div className="container-fluid">
			<Link to="/">
				<a className="navbar-brand"></a>
				<img className="width-img" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"></img>
			</Link>
			<Link className="btn btn-outline-success rounded-pill px-4" to="/signin">
				Login
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					{/* <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos {store.favoritos.length}
					</button> */}
					{/* <ul className="dropdown-menu dropdown-menu-end ">
						{store.favoritos.map((element) => {
							return (
								<li className="d-flex p-1">
									<a className="dropdown-item" href="#">{element}</a>
									<button className="btn btn-danger" onClick={() => actions.removeFavorites(element)}>x</button>
								</li>
							)
						})}
					</ul> */}
				</div>
			</div>
		</div>
	</nav>
);
};