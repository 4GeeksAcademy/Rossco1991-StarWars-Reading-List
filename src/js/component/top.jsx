import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";

import { Context } from "../store/appContext";

export const Top = () => {
    const [store, actions] = useContext(Context)
    return <>
    <div className="container d-flex flex-direction-row">
    {store.characters && store.characters.map((characters, idx) => (
        <Card
          key={idx}
          img={`https://starwars-visualguide.com/assets/img/characters/${
            characters.url.split("/")[5]
          }.jpg`}
        >
          <h5 className="card-title">{characters.name}</h5>
    
          <ul className="list-group">
            <li className="list-group-item">Gender: {characters.gender}</li>
            <li className="list-group-item">Hair Color: {characters.hair_color}</li>
    
            <li className="list-group-item">Eye Color: {characters.eye_color}</li>
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