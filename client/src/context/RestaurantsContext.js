import React, { useState, createContext } from 'react';

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = props => {
  const [restaurants, setRestaurants] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState("")
  const [selectedReviews, setSelectedReviews] = useState("")

  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant])
  }

  return (
    <RestaurantsContext.Provider 
      value={{restaurants, 
              setRestaurants, 
              addRestaurants, 
              selectedRestaurant, 
              setSelectedRestaurant,
              selectedReviews,
              setSelectedReviews
            }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  )
}