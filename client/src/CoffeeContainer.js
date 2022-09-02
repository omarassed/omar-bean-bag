import React from 'react'
import CoffeeCard from './CoffeeCard'
import Reviews from "./Reviews"

function CoffeeContainer({ coffees }) {
    const coffeeList = coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee}/>)
  return (
    <div>
        {coffeeList}
    </div>

  )
}

export default CoffeeContainer