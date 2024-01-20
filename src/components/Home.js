import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    // <--Home page details-->

    <div className="container_left " id="home">
      <div className="caption-header">
        <div className="home-hd">Welcome to Fashionly!</div>

        <h1>
          DISCOVERING
          <br /> THE WORLD..
        </h1>
      </div>

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
