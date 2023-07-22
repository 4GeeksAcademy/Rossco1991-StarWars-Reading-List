import React, { useState } from "react";
import { Image } from "./image.jsx";

export const Card= (props) => {

  

  return (
      <div className="card text-center mx-3">
        <Image/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <ul className="list-group">
            <li className="list-group-item">
               Gender: {props.gender}
            </li>
            <li className="list-group-item">
              Hair Color: {props.hairColor}
            </li>
            <li className="list-group-item">
              
              </li>
          </ul>
        </div>
        <span className>
        <a className="btn btn-outline-primary">
            Learn More!
        </a>
        <a className="btn btn-outline-warning">
        <i class="fa-regular fa-heart"></i>
        </a>
        </span>
      </div>
  )
}