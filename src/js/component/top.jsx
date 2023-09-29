import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Top = () => {
  const { store, actions } = useContext(Context);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (
      store.favorites.find((x) => {
        for (let i in x) {
          if (character[i] && character[i].name === x[i].name) {
            return true;
          }
        }
      })
    ) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [store.favorites]);

  return (
    <div className="container d-flex overflow-auto col-10 mb-3">
      {store.characters &&
        store.characters.map((characters, idx) => (
          <Card
            key={idx}
            img={`https://starwars-visualguide.com/assets/img/characters/${
              characters.url.split("/")[5]
            }.jpg`}
          >
            <h5 className="card-title">{characters.name}</h5>
            <span className=" d-flex justify-content-between">
              <a className="btn btn-outline-primary">
                <Link to={`/character/${characters.uid}`}>Learn More!</Link>
              </a>
              <button
                className="btn btn-outline-warning"
                style={{
                  background: "transparent",
                  outline: "solid",
                }}
                onClick={() => {
                  actions.setFavorite(characters);
                }}
              >
                <i className="fa-regular fa-heart"></i>
              </button>
            </span>
          </Card>
        ))}
    </div>
  );
};
