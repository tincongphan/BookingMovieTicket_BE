
const express = require('express');
const { Movie } = require("../models")
const { listFilm, filmDetail, filmDelete } = require('../controllers/movieController');
const checkExist = require('../middlewares/checkExist');
const movieRouter = express.Router()

// list film
movieRouter.get("/", listFilm)
// film detail
movieRouter.get("/:id", checkExist(Movie), filmDetail)
// film delete
movieRouter.delete("/:id", checkExist(Movie), filmDelete)

module.exports = {
    movieRouter
}