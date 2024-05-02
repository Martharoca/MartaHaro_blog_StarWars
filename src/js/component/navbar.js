import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Context } from "../store/appContext";
import "../../styles/index.css";
import { element } from "prop-types";

export const Navbar = () => {

	const { store, actions } = useContext(Context)

	const token = localStorage.getItem("token")

	return (
		<nav className="navbar bg-black">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="logo" /></span>
			</Link>
			<div className="favorites ml-auto">
				{token ? 
				<div className="btn-group me-5">
					<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
						{/* <span className="badge bg-secondary mx-1">{store.favorites[0]?.length + store.favorites[1]?.length + store.favorites[2]?.length}</span>  para que represente cada fav de manera individual y no me de error y lo agrupe como una sola lista */}
					</button>
					<ul className="dropdown-menu">
						{store.favorites.length === 0 ?
							<li className="text-center">(0)</li>
							: store.favorites.map((item, index) => {
								return (
									item.map((element, index) => {
										return (
											<li key={index}>
												<a className="dropdown-item text-center" href="#">{element.character_id || element.planet_id || element.vehicle_id} <i className="fas fa-trash" onClick={() => actions.deleteFavorite(item)}></i></a>
											</li>)
							})
						)
							})}
					</ul>
				</div>
			
			:<Link to="/login">
				<button type="button" className="btn btn-warning">Login</button>
			</Link>}
			</div>
		</nav>
	);
};