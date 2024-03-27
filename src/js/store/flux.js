const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[],
			vehicles: [],
			planets: [],
			detalles: {}, //de la función obtenerDetalles
			planet: {},
			vehicle: {},
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getAllCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then((res) => res.json())
					.then((data) => setStore({ people: data.results }))
					.catch(error => console.error(error))
			},
			getVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then(res => res.json())
                    .then(data => setStore({ vehicles: data.results }))
                    .catch(error => console.error(error))
            },
			getVehicle:(url) => {  
				fetch(url) 
				.then(res=>res.json())
				.then(data => setStore({vehicle: data.results}))
				.catch(error => console.error(error))
				
			},
			getPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({ planets: data.results }))
                    .catch(error => console.error(error))
            },
			getPlanet:(url) => { 
				fetch(url) 
				.then(res=>res.json())
				.then(data => setStore({planet: data.results}))
				.catch(error => console.error(error))
				
			},

			getDetalles:(url) => {  //desarrollar esta función
				fetch(url) //debo concatenar la url con una id para que me de detalles de esa id en concreto
				.then(res=>res.json())
				.then(data => setStore({detalles: data.results}))
				.catch(error => console.error(error))
				
			},

			loadSomeData: () => {
					// // fetch().then().then(data => setStore({ "foo": data.bar }))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		 }
	};
};

export default getState;
