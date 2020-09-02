import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import RestaurantFinder from '../api/RestaurantFinder'

const UpdateRestaurant = (props) => {
  const {id} = useParams()
  const history = useHistory()
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const {data: {data: {restaurant: {location, name, price_range}}}}= await RestaurantFinder.get(`/${id}`)
  
      setName(name)
      setLocation(location)
      setPriceRange(price_range)
    }

    fetchData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange
    })

    history.push('/')
  }

  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input 
            id="name" 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label>Location</label>
          <input 
            id="name" 
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)} />
        </div>

        <div>
          <label>Price Range</label>
          <input 
            id="name" 
            type="text"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)} />
        </div>
        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UpdateRestaurant
