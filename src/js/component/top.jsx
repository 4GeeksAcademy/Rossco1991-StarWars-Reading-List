import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Top = () => {
  const { store, actions } = useContext(Context);
  // const [liked, setLiked] = useState(false);
  // useEffect(() => {
  //   if (
  //     store.favorites.find((x) => {
  //       for (let i in x) {
  //         if (characters[i] && characters[i].name === x[i].name) {
  //           return true;
  //         }
  //       }
  //     })
  //   ) {
  //     setLiked(true);
  //   } else {
  //     setLiked(false);
  //   }
  // }, [store.favorites]);

  return (
    <div className="container d-flex overflow-auto col-10 mb-3">
      {store.characters &&
        store.characters.map((characters, idx) => (
          <Card
            key={idx}
            img={`https://starwars-visualguide.com/assets/img/characters/${
              characters.url.split("/")[5]
            }.jpg`}
          >
            <h5 className="card-title">{characters.properties.name}</h5>
            <ul className="list-group">
              <li className="list-group-item">Gender: {characters.gender}</li>
              <li className="list-group-item">
                Hair Color: {characters.hair_color}
              </li>
              <li className="list-group-item">
                Eye Color: {characters.eye_color}
              </li>
            </ul>
            <span>
              <a className="btn btn-outline-primary">
                <Link to={`/character/${characters.uid}`}>Learn More!</Link>
              </a>
              <a
                className="btn btn-outline-warning"
                onClick={() => {
                  actions;
                }}
              >
                <i className="fa-regular fa-heart"></i>
              </a>
            </span>
          </Card>
        ))}
    </div>
  );
};
