import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";

export const Image = () => {
  const {char_id} = useParams();
  const [icon, setIcon] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships${char_id}`)
      .then((resp) => resp.json())
      .then((data) => setIcon(data));
  }, []);

  return(
    <>
    {img ? <img src={img} className="card-img-top" alt="..." /> : ""}
    </>
  );
};

