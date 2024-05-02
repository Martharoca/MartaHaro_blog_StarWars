import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { CardCharacter } from "../component/cardcharacter.jsx";
import { CardPlanets } from "../component/cardplanets.jsx";
import { CardVehicles } from "../component/cardvehicles.jsx";
import "../../styles/index.css";


export const Favorites = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.getFavorites()
	}, [])

	return (
		<div className="favorites">
			<h1 className="tittle-user text-center text-warning">Favorites</h1>
            <ul className="Favorites-list">
						{store.favorites.length === 0 ?
							<h3 className="text-center">(you don't have favorites darling)</h3>
							: store.favorites.map((item, index) => {
								return (
									<li key={index}>
										<a className="dropdown-item text-center" href="#">{item} <i className="fas fa-trash" onClick={() => actions.deleteFavorite(item)}></i></a>
									</li>)
							})}

					</ul>
		</div>
	)
};