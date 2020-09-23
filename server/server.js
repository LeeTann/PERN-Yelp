require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan  = require('morgan')

const restaurantsRouter = require('./routes/restaurants')
const reviewRouter = require('./routes/reviews')

const app = express()

app.use(cors())
app.use(express.json())

app.use(restaurantsRouter)
app.use(reviewRouter)

const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`)
})