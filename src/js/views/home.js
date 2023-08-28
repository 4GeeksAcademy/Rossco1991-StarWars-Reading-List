import React, { useContext } from "react";
import "../../styles/home.css";
import { Top } from "../component/top.jsx";
import { Middle } from "../component/middle.jsx";
import { End } from "../component/end.jsx";

export const Home = () => {

  return(
    <div>
    <Top/>
    <Middle/>
    <End/>
    </div>
  )};
