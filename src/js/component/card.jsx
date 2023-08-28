import React from "react";


export const Card = ({img = null, width = "30rem", children}) => {

  const style = {
    minWidth: width
  };

  return (
        <div className="card text-nowrap mx-2" style={style}>
          {img ? <img src={img} className="card-img-top"  alt="..." /> : ""}
          <div className="card-body">{children}</div>
        </div>
      );
    };