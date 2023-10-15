import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    // <--Home page details-->
    <div className="d-flex justify-content-center mb-20" id="home">
      <div className="caption-header">
        <div className="home-hd">Welcome to Fashionly!</div>
        <h2>
          We don't design <span className="name-hd">Clothes</span>
          <br /> We design dreams
        </h2>
        <h4 className="stack-hd">Try it first</h4>
        <Button
          className="d-flex justify-content-center "
          variant="danger"
          onClick={() => navigate("/customer-login")}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default Home;