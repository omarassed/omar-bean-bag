import React from "react";
import CoffeeContainer from "./CoffeeContainer";

function Home({ coffees, reviews }) {
  return (
    <div>
      <h1>Check out our coffees!</h1>
      <CoffeeContainer coffees={coffees} reviews={reviews} />
    </div>
  );
}

export default Home;
