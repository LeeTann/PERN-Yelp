require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan  = require('morgan')

const restaurantsRouter = require('./routes/restaurants')

const app = express()

app.use(cors())
app.use(express.json())

app.use(restaurantsRouter)

const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`)
})