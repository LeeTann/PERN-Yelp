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
              <div>{review.rating}</div>
              <p>{review.review}</p>
            </div>
          
        ))
      )}
    </div>
  )
}

export default Reviews
