import React from "react";
import { useHistory } from "react";

function Review({ review }) {
  const { id, rating, comment } = review;
  // const history = useHistory();

  // function handleHistoryReview() {
  //     history.push(`/coffees/${id}/reviews`)
  //   }

  return (
    <div className="comment-box">
      <p>Rating: {rating}</p>
      <p>Comment: {comment}</p>
    </div>
  );
}

export default Review;
