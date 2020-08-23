const { Pool } = require('pg')

// Postgres automatically knows to look in .env file
const pool = new Pool()

module.exports = {
  query: (text, params) => pool.query(text, params)
}