import React from 'react'
import CoffeeContainer from './CoffeeContainer'

function Home({ coffees, reviews }) {
  return (
    <div>
        <CoffeeContainer coffees={coffees} reviews={reviews} />
    </div>
  )
}

export default Home