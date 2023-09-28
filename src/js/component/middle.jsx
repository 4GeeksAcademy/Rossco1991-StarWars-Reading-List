import React from "react";
import { useContext } from "react";
import { Card } from "./card.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

export const Middle = () => {
  const { store, actions } = useContext(Context);

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
            <h5 className="card-title">{planets.name}</h5>

            <ul className="list-group">
              <li className="list-group-item">{}</li>
              <li className="list-group-item"></li>

              <li className="list-group-item"></li>
            </ul>
            <span className="d-flex justify-content-space-between">
              <a className="btn btn-outline-primary">Learn More!</a>
              <a className="btn btn-outline-warning">
                <i class="fa-regular fa-heart"></i>
              </a>
            </span>
          </Card>
        ))}
    </div>
  );
};
