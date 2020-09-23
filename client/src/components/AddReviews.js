import React, { useState } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import RestaurantFinder from '../api/RestaurantFinder'

const AddReviews = () => {
  const { id } = useParams()
  const history = useHistory()
  const location = useLocation()
  const [name, setName] = useState("")
  const [rating, setRating] = useState(1)
  const [review, setReview] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        rating,
        review
      })
      history.push('/')
      history.push(location.pathname)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              id="name" 
              placeholder="name" 
              type="text" 
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <select 
              id="rating" 
              className="custom-select"
              value={rating}
              onChange={e => setRating(e.target.value)}>
                <option disabled>Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="review-text">Review</label>
            <textarea 
              id="review-text"
              value={review}
              onChange={e => setReview(e.target.value)} />
          </div>
        </div>

        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default AddReviews
