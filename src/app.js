const express = require('express')

const movies = require('./router/movies')

const app = express()

app.use(express.json())
app.use('/api/v1/movies', movies)

module.exports = app