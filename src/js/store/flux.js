const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      characters: [],
      vehicles: [],
      planets: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      setItem: (ev) => {
        setStore({
          favorites: getStore().favorites,
          item: ev,
        });
      },
      setFavorite: (ev) => {
        setStore({
          favorites: [...getStore().favorites, ev],
          item: getStore().item,
        });
      },
      removeFavorite: (ev) => {
        setStore({
          favorites: getStore().favorites.filter((x) => {
            return x != ev;
          }),
          item: getStore().item,
        });
      },
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
							fetch().then().then(data => setStore({ "foo": data.bar }))
						*/
        fetch(`https://swapi.tech/api/people/`)
          .then((resp) => resp.json())
          .then((data) => setStore({ characters: data.results }));
        fetch(`https://swapi.tech/api/planets/`)
          .then((resp) => resp.json())
          .then((data) => setStore({ planets: data.results }));
        fetch(`https://swapi.tech/api/vehicles/`)
          .then((resp) => resp.json())
          .then((data) => setStore({ vehicles: data.results }));
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
      },
    },
  };
};

export default getState;
