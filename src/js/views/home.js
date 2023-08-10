import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Top } from "../component/top.jsx";
import { Context } from "../store/appContext";
import { Middle } from "../component/middle";

export const Home = () => {

  const { store, actions } = useContext(Context);

  return  
  <>
    <Top/>
    <Middle/>
    <End/>
    </>
};
