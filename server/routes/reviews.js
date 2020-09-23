const router = require('express').Router()
const db = require('../db')

router.post('/api/v1/restaurants/:id/addReview', async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4) RETURNING *", 
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    )
    res.status(201).json({
      status: "success",
      data: {
        review: results.rows[0]
      }
    })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router