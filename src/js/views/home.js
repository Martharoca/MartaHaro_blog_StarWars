// 1.import useContext
// 2. import Context
//3. ejecutar el contexto = const { store, actions } = useContext(Context);

import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/index.css";

import { CardCharacter } from "../component/cardcharacter.jsx";
import { CardPlanets } from "../component/cardplanets.jsx";
import { CardVehicles } from "../component/cardvehicles.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.getCharacter(),
			actions.getPlanets(),
			actions.getVehicles(),
			actions.getInfo()
	}, [])


	return (
		<div className="home">
			<h2 className="tittles text-warning ms-5">Characters</h2>
			<div className="cards d-flex mx-4" style={{ overflowX: "scroll" }}>
				{store.peoples.map((people) => {
					return (
						<div className="text m-3" key={people.uid}>

							<CardCharacter people={people}
								name={people.name}

							/>

						</div>
					);
				})}
			</div>

			<h2 className="tittles text-warning mt-3 ms-5">Planets</h2>
			<div className="cards d-flex mx-4" style={{ overflowX: "scroll" }}>
				{store.planets.map((planet) => {
					return (
						<div className="text m-3" key={planet.uid}>

							<CardPlanets planets={planet}
								name={planet.name}

							/>

						</div>
					);
				})}
			</div>

			<h2 className="tittles text-warning mt-3 ms-5">Vehicles</h2>
			<div className="cards d-flex mx-4" style={{ overflowX: "scroll" }}>
				{store.vehicles.map((vehicle) => {
					return (
						<div className="text m-3" key={vehicle.uid}>

							<CardVehicles vehicles={vehicle}
								name={vehicle.name}

							/>

						</div>
					);
				})}
			</div>

		</div>
	)
};