import React from "react";


export const Card = ({img = null, width = "24rem", children}) => {

  const style = {
    width: width
  };

  return (
        <div className="card mx-auto" style={style}>
          {img ? <img src={img} className="card-img-top" alt="..." /> : ""}
          <div className="card-body">{children}</div>
        </div>
      );
    };
  