import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Link } from "react-router-dom";


import { Context } from "../store/appContext";

export const Top = () => {
    const {store, actions} = useContext(Context)
    console.log(store.characters)

    return (
    <div className="container d-flex overflow-auto col-10 mb-3">
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
          <span>
            <a className="btn btn-outline-primary">
              <Link to="/characters/:char_id">
                Learn More!
              </Link>
            </a>
            <a className="btn btn-outline-warning">
              <i className="fa-regular fa-heart"></i>
            </a>
          </span>
        </Card>
      ))}
    </div>
    )
}