import React from "react";
import { useHistory } from "react-router-dom";

function CoffeeCard({ coffee }) {
  const { id, name, brand, price } = coffee;

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
        </div>
      </div>
    </>
  );
}

export default CoffeeCard;
