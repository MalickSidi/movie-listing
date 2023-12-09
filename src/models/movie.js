const mongoose = require('mongoose')

const movieScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
})

const Movie = mongoose.model("Movie", movieScheme)

module.exports = Movie