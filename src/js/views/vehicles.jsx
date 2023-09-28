import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export const Vehicles = () => {
  const { ship_id } = useParams();
  const [ship, setShip] = useState({});
  useEffect(() => {
    async function getShips() {
      const response = fetch();
    }
  }, []);
  return <></>;
};
