import React from 'react'
import Ratings from './Ratings'

const Reviews = ({reviews}) => {
  console.log(reviews)
  return (
    <div>
      {reviews && (
        reviews.map(review => (
          
            <div key={review.id}>
              <div>{review.name}</div>
              <span><Ratings rating={review.rating} /></span>
              <p>{review.review}</p>
            </div>
          
        ))
      )}
    </div>
  )
}

export default Reviews
