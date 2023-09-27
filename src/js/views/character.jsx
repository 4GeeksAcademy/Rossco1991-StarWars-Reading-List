import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Character = () => {
  const { char_id } = useParams('');
  const [character, setCharacter] = useState({});

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch(`https://swapi.dev/api/people/${char_id}/`);
      const data = await response.json();
      setCharacter(data);
    }
    getCharacters();
  }, []);

  return (
    <div className="container-fluid">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${char_id}.jpg`}
      />
      <div className="header">
        <h1>{character.name}</h1>
      </div>
      <div className="body">
        <p>Description</p>
      </div>
      <div className="footer">
        <p>{character.height}</p>
        <p>{character.mass}</p>
        <p>{character.hair_color}</p>
        <p>{character.skin_color}</p>
        <p>{character.eye_color}</p>
        <p>{character.birth_year}</p>
        <p>{character.gender}</p>
        <p>{character.homeworld}</p>
      </div>
    </div>
  );
};
