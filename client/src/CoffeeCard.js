import React from "react";
import { useHistory } from "react-router-dom";

function CoffeeCard({ coffee, reviewsList }) {
  const { id, name, brand, price } = coffee;

  const history = useHistory();
  function handleHistoryCardDetail() {
    history.push(`/coffees/${id}`);
  }

  function handleHistoryReview() {
    history.push(`/coffees/${id}/reviews`);
  }
  return (
    <>
      <div className="coffee-card-container">
        <div className="coffee-card">
          <div className="card-contents">
            <h4>{name}</h4>
            <h3>{brand}</h3>
            <h3>{price}</h3>
          </div>
          <button onClick={handleHistoryCardDetail}>See Details</button>
        </div>
      </div>
    </>
  );
}

export default CoffeeCard;
