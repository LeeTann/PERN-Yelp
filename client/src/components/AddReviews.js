import React, { useState } from 'react'

const AddReviews = () => {
  const [name, setName] = useState("")
  const [rating, setRating] = useState("")
  const [review, setReview] = useState("")

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

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddReviews
