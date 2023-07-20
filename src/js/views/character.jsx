import React, { Children } from "react";
import { Link, useParams } from "react-router-dom";


export const Character = ({children}) => {

  const params = useParams();
    return (
      
      <div className="container d-flex flex-direction-row">
        <div className="row">
          {children}
        </div>
      </div>
  );
};
