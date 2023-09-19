import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Character = () => {
  const { char_id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch(`https://swapi.dev/api/people/${char_id}`);
      const data = await response.json();
      setCharacter(data);
    }
    getCharacters();
  }, []);

  return (
    <div className="container-fluid">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${
          characters.url.split("/")[5]
        }.jpg`}
      />
      <h1>{character.name}</h1>
      <p>
        Sed viverra vulputate lacinia. Nullam a libero feugiat, tempor dui sit
        amet, tincidunt neque. Mauris molestie ac ipsum a imperdiet. Nam vitae
        ullamcorper metus, vel ullamcorper odio. Nulla cursus velit vitae nulla
        convallis mattis. Aliquam cursus lacus eu orci aliquet, id tincidunt
        enim luctus. Pellentesque ac efficitur turpis. Nunc sit amet urna ut
        libero finibus fringilla eleifend vel risus. Fusce nec iaculis eros.
        Nulla et turpis lobortis mi venenatis iaculis
      </p>
    </div>
  );
};
