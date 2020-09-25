import React, { useEffect, useContext } from 'react'
import RestaurantFinder from '../api/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'
import { useHistory } from 'react-router-dom'
import Ratings from './Ratings'

const RestaurantList = (props) => {
  let history = useHistory()
  const {restaurants, setRestaurants} = useContext(RestaurantsContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get('/')
        console.log(response)
        setRestaurants(response.data.data.restaurants)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const handleDelete = async (e, id) => {
    e.stopPropagation()
    try {
      const response = await RestaurantFinder.delete(`${id}`)

      // Update the UI
      setRestaurants(restaurants.filter(restaurant => (
        restaurant.id !== id
      )))
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = (e, id) => {
    e.stopPropagation()
    history.push(`/restaurants/${id}/update`)
  }

  const handleRestaurant = (id) => {
    history.push(`/restaurants/${id}`)
  }

  const renderRating = (restaurant) => {

    if (!restaurant.count) {
      return <span>0 reviews</span>
    }
    return (
      <>
        <Ratings rating={restaurant.average_rating} />
        <span>({restaurant.count})</span>
      </>
    )
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Restaurant</th>
            <th>Location</th>
            <th>Price Range</th>
            <th>Rating</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map(restaurant => (
            <tr onClick={() => handleRestaurant(restaurant.id)} key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.location}</td>
              <td>{"$".repeat(restaurant.price_range)}</td>
              <td>{renderRating(restaurant)}</td>
              <td><button onClick={(e) => handleUpdate(e, restaurant.id)}>Update</button></td>
              <td><button onClick={(e) => handleDelete(e,restaurant.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList
