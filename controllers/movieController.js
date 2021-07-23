
const { Movie, sequelize, Cinema_Movie, Ticket } = require("../models")

// get list film
const listFilm = async (req, res) => {
    try {
        const listFilm = await Movie.findAll()
        res.status(200).send(listFilm)
    } catch (error) {
        res.status(500).send(`Error list film controller ${error}`)
    }
}
// film detail
const filmDetail = async (req, res) => {
    const { id } = req.params
    try {
        const [filmDetail] = await sequelize.query(
            `
            select movies.id, movies.name, movies.startDate, movies.time, movies.evaluate,
            movies.poster, movies.trailer, cinemas.name, cinemas.address, cinemas.image, cineplexes.logo,
            cineplexes.name, showtimes.timeStart from movies
            inner join cinema_movies
            on movies.id = cinema_movies.movieId
            inner join cinemas
            on cinemas.id = cinema_movies.cinemaId
            inner join cineplexes
            on cineplexes.id = cinemas.cineplexId
            inner join showtimes
            on cinemas.id = showtimes.cinemaId
            where movies.id = ${id};
            `
        )
        res.status(200).send(filmDetail)
    } catch (error) {
        res.status(500).send(`Error film detail controller ${error}`)
    }
}
// delete film
const filmDelete = async (req, res) => {
    const { id } = req.params
    try {
        
        await Ticket.destroy({ where: { movieId: id } })
        await Cinema_Movie.destroy({ where: { movieId: id } })
        await Movie.destroy({ where: { id } })

        res.status(200).send("Delete Successfully")
    } catch (error) {
        res.status(500).send(`Error film delete controller ${error}`)
    }

}

module.exports = {
    listFilm,
    filmDetail,
    filmDelete
}