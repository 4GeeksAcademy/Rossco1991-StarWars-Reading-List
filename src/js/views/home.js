import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(async () => {
    const result = await Promise.allSettled(
      ["people", "planets", "vehicles"].map((url) =>
        fetch(`https://swapi.dev/api/${url}`)
      )
    );
    const data = await Promise.allSettled(result.map())

 
  }, []);

  return characters.map((character, idx) => (
    <Card
      key={idx}
      img={`https://starwars-visualguide.com/assets/img/characters/${
        character.url.split("/")[5]
      }.jpg`}
    >
      <h5 className="card-title">{character.name}</h5>

      <ul className="list-group">
        <li className="list-group-item">Gender: {character.gender}</li>
        <li className="list-group-item">Hair Color: {character.hair_color}</li>

        <li className="list-group-item">Eye Color: {character.eye_color}</li>
      </ul>
      <span className="d-flex justify-content-space-between">
        <a className="btn btn-outline-primary">Learn More!</a>
        <a className="btn btn-outline-warning">
          <i class="fa-regular fa-heart"></i>
        </a>
      </span>
    </Card>
  ));
};
