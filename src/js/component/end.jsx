import React from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.jsx";
import { useContext } from "react";
import "../../styles/home.css";

export const End = () => {
 
    const [store, actions] = useContext(Context);

  return
  <>
    <div className="container d-flex flex-direction-row">
      {store.vehicles &&
        store.vehicles.map((vehicles, idx) => (
          <Card
            key={idx}
            img={`https://starwars-visualguide.com/assets/img/vehicles/${
              vehicles.url.split("/")[5]
            }.jpg`}
          >
            <h5 className="card-title">{vehicles.name}</h5>

            <ul className="list-group">
              <li className="list-group-item">Model: {vehicles.model}</li>
              <li className="list-group-item">Length: {vehicles.length}</li>

              <li className="list-group-item">Crew: {vehicles.crew}</li>
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
  </>
}
