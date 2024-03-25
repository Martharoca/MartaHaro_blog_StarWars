const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people:[],
			vehicles: [],
			planets: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getAllCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then((res) => res.json())
					.then((data) => console.log(data))
					.catch(error => console.log(error))
			},
			getVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then(res => res.json())
                    .then(data => setStore({ vehicles: data.results }))
                    .catch(error => console.error(error))
            },
			getPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({ planets: data.results }))
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
