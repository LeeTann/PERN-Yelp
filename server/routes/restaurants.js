const router = require('express').Router()
const db = require('../db')

// Get all restaurants
router.get('/api/v1/restaurants', async (req, res) => {
  try {
    // const results = await db.query('SELECT * FROM restaurants')
    const restaurantRatingData = await db.query('SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id;')
    
    console.log("RESTAURANT RATING DATA!!!", restaurantRatingData)
    res.status(200).json({
      status: "success",
      results: restaurantRatingData.rows.length,
      data: {
        restaurants: restaurantRatingData.rows
      }
    })
  } catch (error) {
    console.log(error)
  }
})

// Get a restaurant and reviews
router.get('/api/v1/restaurants/:id', async (req, res) => {
  console.log(req.params.id)

  try {
    const restaurant = await db.query('SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id WHERE id = $1;', [req.params.id])

    const reviews = await db.query('SELECT * FROM reviews WHERE restaurant_id = $1', [req.params.id])

    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows
      }
    })
  } catch (error) {
    console.log(error)
  }
})

// Create a Restaurant
router.post('/api/v1/restaurants', async (req, res) => {
  console.log(req.body)

  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *",
      [req.body.name, req.body.location, req.body.price_range]
    )

    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0]
      }
    })
  } catch (error) {
    console.log(error)
  }
})

// Update a Restaurant
router.put('/api/v1/restaurants/:id', async (req, res) => {
  
  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    )
    
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0]
      }
    })
  } catch (error) {
    console.log(error)
  }
})

// Delete a Restaurant
router.delete('/api/v1/restaurants/:id', async (req, res) => {
  try {
    const results = await db.query("DELETE FROM restaurants WHERE id = $1", [req.params.id])

    res.status(204).json(results)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router