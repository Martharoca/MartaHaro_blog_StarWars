import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import {Link} from "react-router-dom";


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect( () => {
		actions.getAllCharacters()
		actions.getVehicles()
		actions.getPlanets()
	}, [])
    //console.log(store.people);



	return (
		<><div className="">
			<div className="px-5 pt-3">
				<h1> Characters</h1>
			</div>
		</div><div className="d-flex gap-0 column-gap-3 overflow-auto">
				{store.people.map((item) => (
					<div className="col p-5" key={item.uid}>
						<div className="card p-2 g-col-6" style={{ width: "250px" }}>
							<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
							<div className="card-body p-7">
								<h5 className="card-title text-center">{item.name}</h5>
								{/*<p>{store.detallespersonaje.gender}</p> */}
								<Link className='btn btn-outline-info mx-2' to={`/detailview/people/${item.uid}`}>Learn more!</Link>
								<button className='btn btn-outline-warning'
									onClick={() => {
										let name = item.name;
										actions.setFavorites(name);
									} }
								><i class="fa fa-heart"></i></button>
							</div>
						</div>
					</div>))}
			</div></>
	// <div className="text-center mt-5">
	// 	<h1>Hello Rigo!</h1>
	// 	<p>
	// 		<img src={rigoImage} />
	// 	</p>
	// 	<a href="#" className="btn btn-success">
	// 		If you see this green button, bootstrap is working
	// 	</a>
	// </div>
	);
	};

