import React, { useState } from "react";

function CoffeeForm({ addCoffee }) {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function onSubmit(e) {
    e.preventDefault();

    fetch("/coffees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, ongoing: true }),
    }).then((res) => {
      if (res.ok) {
        res.json().then(addCoffee);
      } else {
        res.json().then((data) => {
          setErrors(Object.entries(data.errors));
        });
      }
    });
  }

  return (
    <div className="App">
      {errors
        ? errors.map((e) => (
            <div>
              {e[0]} {e[1]}
            </div>
          ))
        : null}
      <form onSubmit={onSubmit}>
        <label>Name </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label> Brand</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <label>Add Coffee!</label>
        <input type="submit" className="add-coffee-button" />
      </form>
    </div>
  );
}

export default CoffeeForm;
