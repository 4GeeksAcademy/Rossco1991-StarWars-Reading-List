import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export const Vehicles = () => {
  const { vehicle_id } = useParams();
  const [vehicle, setVehicle] = useState({});
  useEffect(() => {
    async function getVehicles() {
      const response = await fetch(
        `https://swapi.tech/api/vehicles/${vehicle_id}`
      );
      const data = await response.json();
      setVehicle(data.result.properties);
    }
    getVehicles();
  }, []);
  return (
    <div className="container-fluid d-flex">
      {vehicle ? (
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle_id}.jpg`}
          className="img-fluid rounded mx-auto"
        />
      ) : (
        <h1>Image not found</h1>
      )}
      <div className="header position-fixed-top ml-auto ps-2">
        <h1 className="display-1 text-center">{vehicle.model}</h1>
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
        <span className="d-flex flex-row text-warning justify-content-sm-between">
          <h5>
            Vehicle Class: <br />
            {vehicle.vehicle_class}
          </h5>
          <h5>
            Manufacturer: <br />
            {vehicle.manufacturer}
          </h5>
          <h5>
            Cost in Credits: <br />
            {vehicle.cost_in_credits}
          </h5>
          <h5>
            Length: <br />
            {vehicle._length}
          </h5>
          <h5>
            Crew: <br />
            {vehicle.crew}
          </h5>
          <h5>
            Passengers: <br />
            {vehicle.passengers}
          </h5>
          <h5>
            Max Atmosphering Speed: <br />
            {vehicle.max_atmosphering_speed}
          </h5>
        </span>
      </div>
    </div>
  );
};
