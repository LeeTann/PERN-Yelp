import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import RestaurantFinder from '../api/RestaurantFinder'
import Ratings from '../components/Ratings'

const DetailPage = () => {
  const {id} = useParams()
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: {data: {restaurant}}} = await RestaurantFinder.get(`${id}`)
        setSelectedRestaurant(restaurant)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>{selectedRestaurant && selectedRestaurant.name}</h1>
      <div>
        <Ratings rating={2.5} />
      </div>
    </div>
  )
}

export default DetailPage
