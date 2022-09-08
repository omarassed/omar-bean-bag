import React from "react";
import { useHistory } from "react-router-dom";

function CoffeeCard({ favCoffee }) {
  const { id, name, brand, price } = favCoffee;

  const history = useHistory();
  function handleHistoryCardDetail() {
    history.push(`/coffees/${id}`);
  }
  return (
    <>
      <div className="coffee-card-container">
        <div className="coffee-card">
          <h2>{name}</h2>
          <h1>{brand}</h1>
          <h1>{price}</h1>
          <button onClick={handleHistoryCardDetail}>See Details</button>
          {/* onClick={seeReviews} */}
          <button>See Reviews</button>
        </div>
      </div>
    </>
  );
}

export default CoffeeCard;