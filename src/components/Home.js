import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    // <--Home page details-->
    // <div className="d-flex justify-content-center mb-20" id="home">
    <div className="container_left " id="home">
      <div className="caption-header">
        <div className="home-hd">Welcome to Fashionly!</div>
        {/* <h2>
          We don't design <span className="name-hd">Clothes</span>
          <br /> We design dreams
        </h2> */}
        <h1>
          DISCOVERING
          <br /> THE WORLD..
        </h1>
      </div>
      {/* <div className="para">
        <h4>
          Travel X, Exclusive Deals, and 30% More Trip Coins. Book Flights,
          Hotels, Trains & Rental Cars Anywhere in the World in Just Seconds.
          View Flights. Register Online. See Destinations.
        </h4>
      </div> */}

      {/* <h4 className="stack-hd">Try it first</h4> */}

      <div className="explore-button">
        <Button
          className="button"
          variant="btn btn-success btn-lg"
          onClick={() => navigate("/customer-login")}
        >
          Explore Now !!
        </Button>
      </div>
    </div>
  );
}

export default Home;
