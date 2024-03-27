import React, { useEffect,useContext } from "react";
import {  useParams} from "react-router-dom";
//import { Context } from "../store/appContext";

export const Detalles = () => {  //1.conseguimos el id en la URL  2.
    const { store, actions } = useContext(Context);
    
    const {id} = useParams();
    const url = "https://www.swapi.tech/api/people/"+id

useEffect(() => {
    actions.getDetalles(url) // dentro de esta funcion decimos (id)
},[])
	return (
		<div className="bg dark">
            <div className="card mt-3 mx-auto" style={{ maxWidth: "58%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${store.detalles.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-center fs-2">{store.detalles.properties?.name}</h5>
                            <p className="card-text">{store.detalles.description}</p>
                        </div>
                    </div>
                </div>
                <hr class="border border-danger border-2 opacity-50 mt-3"></hr>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Name:</p>
                            <p>{store.detalles.properties?.name}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Gender:</p>
                            <p>{store.detalles.properties?.gender}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Birthday:</p>
                            <p>{store.detalles.properties?.birth_year}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Height:</p>
                            <p>{store.detalles.properties?.height}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Skin:</p>
                            <p>{store.detalles.properties?.skin_color}</p>
                        </div>
                        <div class="col">
                            <p className='fs-5 fw-bold text-danger'>Eyes:</p>
                            <p>{store.detalles.properties?.eye_color}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}