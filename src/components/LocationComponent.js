import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

function RenderLocationItem({ location }) {
  return (
    <Card>
      <Link to={`/directory/${location.id}`}>
        <CardImg width="100%" src={location.image} alt={location.name} />

        <CardBody>{location.name}</CardBody>
      </Link>
    </Card>
  );
}

function Location(props) {
  const Location = props.locations.map((location) => {
    return (
      <div key={location.id} className="col-md-5 m-1">
        <RenderLocationItem location={location} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="my-4  text-center"> WE ARE WORKING ON THIS LOCATIONS </h2>
        </div>
      </div>
      <div className="row">{Location}</div>
    </div>
  );
}

export default Location;