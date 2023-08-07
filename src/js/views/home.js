import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";

import { Context } from "../store/appContext";

export const Home = () => {

  const { store, actions } = useContext(Context);

  return  <>
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
  {store.planets && store.planets.map((planets, idx) => (
    <Card
      key={idx}
      img={`https://starwars-visualguide.com/assets/img/planets/${
        planets.url.split("/")[5]
      }.jpg`}
    >
      <h5 className="card-title">{planets.name}</h5>

      <ul className="list-group">
        <li className="list-group-item">
          {}
        </li>
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
    {store.vehicles && store.vehicles.map((vehicles, idx) => (
    <Card
      key={idx}
      img={`https://starwars-visualguide.com/assets/img/vehicles/${
        vehicles.url.split("/")[5]
      }.jpg`}
    >
      <h5 className="card-title">{vehicles.name}</h5>

      <ul className="list-group">
        <li className="list-group-item">
          Model: {vehicles.model}
        </li>
        <li className="list-group-item">
        Length: {vehicles.length}
        </li>
          
        <li className="list-group-item">
          Crew: {vehicles.crew}
        </li>
      </ul>
      <span className="d-flex justify-content-space-between">
        <a className="btn btn-outline-primary">Learn More!</a>
        <a className="btn btn-outline-warning">
          <i class="fa-regular fa-heart"></i>
        </a>
      </span>
    </Card>
  ))}
  </>
};
