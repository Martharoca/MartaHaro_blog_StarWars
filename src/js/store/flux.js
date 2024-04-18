const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peoples: [],
			planets: [],
			vehicles: [],
			info: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getCharacter: () => {
				fetch("https://www.swapi.tech/api/people/", {
					method: 'GET'
				})
					.then(res => res.json())
					.then(data => setStore({ peoples: data.results }))
					.catch(err => console.error(err))

			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/", {
					method: 'GET'
				})
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))

			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/", {
					method: 'GET'
				})
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err))

			},
			getInfo: (type, id) => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(`https://www.swapi.tech/api/${type}/` + id, requestOptions)
					.then((response) => response.json())
					.then((result) => setStore({ info: result.result }))
					.catch((error) => console.error(error));
			},
			addFavorite: (favorite) => {
					const store = getStore();
					const newArray= store.favorites.concat(favorite)
					setStore({ favorites: newArray })
		 	},
			deleteFavorite: (name) => {
				const arrayfiltered = getStore().favorites.filter((item, index) => item !== name)
				// console.log(arrayfiltered);
				setStore({ favorites: arrayfiltered })
		 	},
			favoriteList: (name) => {
				const listNames = getStore().favorites
				if (listNames.length == 0) {
					getActions().addFavorite(name)
				} else {
					if (listNames.includes(name)) {
						getActions().deleteFavorite(name)
					} else {
						getActions().addFavorite(name)
					}
				}
		 	}
		}
	};
};

export default getState;