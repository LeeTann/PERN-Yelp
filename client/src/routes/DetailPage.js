import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import RestaurantFinder from '../api/RestaurantFinder'
import Ratings from '../components/Ratings'
import Reviews from '../components/Reviews'
import AddReviews from '../components/AddReviews'


const DetailPage = () => {
  const {id} = useParams()
  const {selectedRestaurant, setSelectedRestaurant, selectedReviews, setSelectedReviews} = useContext(RestaurantsContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await RestaurantFinder.get(`${id}`)
        // console.log(response)
        const {data: {data: {restaurant, reviews}}} = await RestaurantFinder.get(`${id}`)
        setSelectedRestaurant(restaurant)
        setSelectedReviews(reviews)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  console.log(selectedRestaurant)

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1>{selectedRestaurant.name}</h1>
          <div>
            <Ratings rating={selectedRestaurant.restaurant} />
          </div>
          <div>
            <Reviews reviews={selectedReviews} />
          </div>
          <AddReviews />
        </>
      )}

    </div>
  )
}

export default DetailPage
