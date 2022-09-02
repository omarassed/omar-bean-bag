import React from 'react'
import CoffeeContainer from './CoffeeContainer'
function Home({ coffees }) {
  return (
    <div>
        <CoffeeContainer coffees={coffees} />
    </div>
  )
}

export default Home