const express = require('express')
const moviesRouter = require('./router/movies')

const app = express()

app.use(express.json())
app.use('/api/v1', moviesRouter)

module.exports = app