import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const CardCharacter = ({ people }) => {

    const { store, actions } = useContext(Context)
  
    const addHeart = store.favorites.includes(people.name)
  
    function addFavorites() {
      actions.favoriteList(people.name)
    }
  
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-text">{people.name}</h5>
          {/* <p className="card-text">Gender: ... </p>
          <p className="card-text">Hair color: ... </p>
          <p className="card-text">Eye color: ... </p> */}
          <Link to={"/detalles/people/" + people.uid}>
            <button href="#" className="btn btn-outline-primary me-5">Learn more!</button>
          </Link>
          <a href="#" className="btn btn-outline-warning ms-5" onClick={addFavorites}><i className={`fa- regular fa-heart ${addHeart ? "fas" : "far"}`}></i></a>
        </div>
      </div>
    );
  };















// export const Card = () => {
//   const { store, actions } = useContext(Context)
//   return (
//     <div className="container mt-5 vh-100">
//     <div className="row justify-content-center">
//         <div className="col-md-6">
//             <div className="card ">
//                 <div className="card-header text-center color2">
//                     <h5 className="card-title text-dark">Iniciar Sesión</h5>
//                 </div>
//                 <div className="card-body color3">
//                     <form>
//                         <div className="form-floating mb-3">
//                             <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
//                             <label htmlFor="floatingInput" className="text-dark">Email</label>
//                         </div>
//                         <div className="form-floating mb-2">
//                             <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
//                             <label htmlFor="floatingPassword" className="text-dark">Password</label>
//                         </div>
//                         <div className="form-check mb-3">
//                             <input type="checkbox" className="form-check-input" />
//                             <label htmlFor="rememberMe" className="form-check-label">Recordar Sesión</label>
//                         </div>
//                         <div className="d-flex justify-content-center">
                        
//                             <button type="submit" className="btn btn-outline-success rounded-pill px-4">
//                                 Iniciar
//                             </button>
                       
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// );
// };