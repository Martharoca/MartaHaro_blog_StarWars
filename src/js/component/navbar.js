import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Context } from "../store/appContext";
import "../../styles/index.css";

export const Navbar = () => {

	const { store, actions } = useContext(Context)


	return (
		<nav className="navbar bg-black">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="logo" /></span>
			</Link>
			<div className="favorites ml-auto">
				<div className="btn-group me-5">
					<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites<span className="badge bg-secondary mx-1">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu">
						{store.favorites.length === 0 ?
							<li className="text-center">(empty)</li>
							: store.favorites.map((item, index) => {
								return (
									<li key={index}>
										<a className="dropdown-item text-center" href="#">{item} <i className="fas fa-trash" onClick={() => actions.deleteFavorite(item)}></i></a>
									</li>)
							})}

					</ul>
				</div>
			</div>
		</nav>
	);
};








// export const Navbar = () => {
// 		const {store, actions} = useContext(Context)
// 	return (
// 		<nav className="navbar bg-black">
// 		<div className="container-fluid">
// 			<Link to="/">
// 				<a className="navbar-brand"></a>
// 				<img className="width-img" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"></img>
// 			</Link>
// 			<Link className="btn btn-outline-success rounded-pill px-4" to="/signin">
// 				Login
// 			</Link>
// 			<div className="ml-auto">
// 				<div className="dropdown">
// 				</div>
// 			</div>
// 		</div>
// 	</nav>
// );
// };