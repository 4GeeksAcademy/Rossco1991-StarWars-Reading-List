import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Character = () => {
  const { plan_id } = useParams();
  const [planet, setPlanet] = useState({});

  console.log(char_id, "id");
  useEffect(() => {
    async function getCharacters() {
      const response = await fetch(`https://swapi.tech/api/planets/${plan_id}`);
      const data = await response.json();
      setPlanet(data.result.properties);
    }
    getCharacters();
  }, []);

  return (
    <div className="container-fluid d-flex">
      {planet ? (
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${plan_id}.jpg`}
          className="img-fluid rounded mx-auto"
        />
      ) : (
        <h1>Image not found</h1>
      )}
      <div className="header position-fixed-top ml-auto ps-2">
        <h1 className="display-1 text-center">{planet.name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
          nisi mattis, sollicitudin nibh at, porta est. Aenean lectus lectus,
          bibendum a metus ut, bibendum fringilla quam. Praesent diam leo,
          vehicula non augue consequat, egestas ullamcorper urna. Suspendisse
          sed venenatis lorem, a tincidunt est. Curabitur a nulla eget ante
          euismod accumsan. Aenean porttitor turpis nec turpis lobortis
          efficitur. Donec eget nisi sed neque scelerisque venenatis. Nullam
          malesuada, massa eget luctus dapibus, turpis elit molestie lacus, sit
          amet dapibus quam risus nec sapien. Mauris faucibus tellus felis, sed
          blandit lacus auctor ac. Suspendisse urna nibh, feugiat et tincidunt
          sed, malesuada eu diam. Donec vel sapien rutrum, imperdiet tellus in,
          consequat leo. Aliquam erat volutpat. Fusce gravida lacus dolor, nec
          ultrices dolor rutrum a. Ut porttitor nibh vitae lorem interdum, sit
          amet hendrerit tellus facilisis.{" "}
        </p>
        <span className="d-flex flex-row text-primary justify-content-sm-between">
          <h4>
            Height: <br />
            {character.height}
          </h4>
          <h4>
            Mass: <br />
            {character.mass}
          </h4>
          <h4>
            Hair Color: <br />
            {character.hair_color}
          </h4>
          <h4>
            Skin Color: <br />
            {character.skin_color}
          </h4>
          <h4>
            Eye Color: <br />
            {character.eye_color}
          </h4>
          <h4>
            Birth Year: <br />
            {character.birth_year}
          </h4>
          <h4>
            Gender: <br />
            {character.gender}
          </h4>
        </span>
      </div>
    </div>
  );
};
