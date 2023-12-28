import React from "react";
import { Link, useParams } from "react-router-dom";

const Description = () => {
  const { description } = useParams();
  return (
    <div className="m-5">
      <h2>Description</h2>
      <p className="mb-5">{description}</p>
      <Link to="/" className="btn btn-primary">
        Back
      </Link>
    </div>
  );
};

export default Description;
