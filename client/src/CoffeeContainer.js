import React from 'react'
import CoffeeCard from './CoffeeCard'
import Review from "./Review"

function CoffeeContainer({ coffees, reviews }) {
  const reviewsList = reviews.map(review => <Review key={review.id} review={review}/>)

    const coffeeList = coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee} reviewsList={reviewsList}/>)
  
    
  return (
    <div>
        {coffeeList}
    </div>

  )
}

export default CoffeeContainer