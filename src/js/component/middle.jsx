import React from "react";
import { useContext, useState } from "react";
import { Card } from "./card.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const Middle = () => {
  const { store, actions } = useContext(Context);
  const [liked, setLiked] = useState(false);

  return (
    <div className="container d-flex overflow-auto col-10 mb-3">
      {store.planets &&
        store.planets.map((planets, idx) => (
          <Card
            key={idx}
            img={`https://starwars-visualguide.com/assets/img/planets/${
              planets.url.split("/")[5]
            }.jpg`}
          >
            <h5 className="card-title text-center">{planets.name}</h5>
            <span className="d-flex justify-content-between">
              <Link to={`/planet/${planets.uid}`}>
                <button className="btn btn-outline-primary">Learn More!</button>
              </Link>
              <a
                className="btn btn-outline-warning"
                onClick={() => {
                  actions.setFavorite(setLiked);
                }}
              >
                {liked ? (
                  <i className="fa-solid fa-heart">{liked}</i>
                ) : (
                  <i className="fa-regular fa-heart"></i>
                )}
              </a>
            </span>
          </Card>
        ))}
    </div>
  );
};
