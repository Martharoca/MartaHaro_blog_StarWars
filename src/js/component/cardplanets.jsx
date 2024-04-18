import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export const CardPlanets = ({ planets }) => {

  const { store, actions } = useContext(Context)
  // console.log(planets);

  const addHeart = store.favorites.includes(planets.name)

  function addFavorites() {
    // actions.addFavorite(planets.name)
    actions.favoriteList(planets.name)
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={ planets.uid == 1 ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" : `https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`} className="card-img-top" alt="image" />
      <div className="card-body">
        <h5 className="card-text">{planets.name}</h5>
        <p className="card-text">Population: </p>
        <p className="card-text">Terrain: </p>
        <Link to={"/detalles/planets/" + planets.uid}>
          <button href="#" className="btn btn-outline-primary me-5">Learn more!</button>
        </Link>
        <a href="#" className="corazon btn btn-outline-warning ms-5" onClick={addFavorites}><i className={`fa- regular fa-heart ${addHeart ? "fas" : "far"}`}></i></a>
      </div>
    </div>
  );
};