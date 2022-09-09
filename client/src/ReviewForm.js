import React from "react";
import { useEffect, useState } from "react";

function ReviewForm({ coffeeId, userId, reviews, setReviews }) {
  const [formData, setFormData] = useState({
    rating: "",
    comment: "",
    coffee_id: parseInt(coffeeId),
    user_id: parseInt(userId),
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, rating: parseInt(formData.rating) }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((review) => {
          setReviews([...reviews, review]);
        });
      } else {
        res.json().then((data) => {
          setErrors(Object.entries(data.errors));
        });
      }
    });
  }
  console.log(formData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Leave a Rating 1-5</label>
        <input
          name="rating"
          type="number"
          onChange={handleChange}
          value={formData.rating}
        ></input>
        <label>Comment</label>
        <input
          name="comment"
          onChange={handleChange}
          value={formData.comment}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
