import React from "react";

export const Card = ({ img = null, width = "14.5rem", children }) => {
  const style = {
    minWidth: width,
  };

  return (
    <div className="card text-nowrap mx-2" style={style}>
      <img src={img} className="card-img-top img-fluid" alt="Image Not Found" />
      <div className="card-body">{children}</div>
    </div>
  );
};
