import React from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.jsx";
import { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const End = () => {
  const { store, actions } = useContext(Context);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (
      store.favorites.find((x) => {
        for (let i in x) {
          if (vehicles[i] && vehicles[i].name === x[i].name) {
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
      {store.vehicles &&
        store.vehicles.map((vehicles, idx) => (
          <Card
            key={idx}
            img={`https://starwars-visualguide.com/assets/img/vehicles/${
              vehicles.url.split("/")[5]
            }.jpg`}
          >
            <h5 className="card-title">{vehicles.name}</h5>
            <span className="d-flex justify-content-between">
              <a className="btn btn-outline-primary">
                <Link to={`/vehicles/${vehicles.uid}`}>Learn More!</Link>
              </a>
              <button
                className="btn btn-outline-warning"
                style={{
                  background: "transparent",
                  outline: "solid",
                }}
                onClick={() => {
                  actions.setFavorite(vehicles);
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
