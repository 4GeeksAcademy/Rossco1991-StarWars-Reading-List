import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export const Planets = () => {
  const { planet_id } = useParams;
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    async function getPlanets() {
      const response = await fetch(`https://swapi.dev/api/planets${planet_id}`);
      const data = await response.json();
      setPlanet(data);
    }
    getPlanets();
  }, []);

  return (
    <div className="container">
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${planet_id}.jpg`}
      />
      <h1>{planet.name}</h1>
    </div>
  );
};
