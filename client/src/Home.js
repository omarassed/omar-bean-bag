import React from "react";
import CoffeeContainer from "./CoffeeContainer";

function Home({ coffees, reviews }) {
  return (
    <div className="intro">
      <h1 className="welcome-msg"> Welcome to BeanBag!</h1>
      <p className="intro-one">
        Ever be out grocery shopping when the coffee aisle allures you and keeps
        you fascinated with all their different coffees?
      </p>
      <p className="intro-two">
        Here is an app to save and share those coffees! Select 'Submit a Coffee'
        and please fill out the form. You never know, someone out there might
        just add that coffee to their favorites!
      </p>
      <CoffeeContainer coffees={coffees} reviews={reviews} />
    </div>
  );
}

export default Home;
