import React from "react";
import CoffeeCard from "./CoffeeCard";
import Review from "./Review";

function CoffeeContainer({ coffees }) {
  const coffeeList = coffees.map((coffee) => (
    <CoffeeCard key={coffee.id} coffee={coffee} />
  ));

  return <div>{coffeeList}</div>;
}

export default CoffeeContainer;
