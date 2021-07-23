
const express = require('express');
const { cinemaRouter } = require('./cinemaRouter');
const { logInRouter } = require('./logInRouter');
const { movieRouter } = require('./movieRouter');
const { userRouter } = require('./userRouter');
const rootRouter = express.Router()

rootRouter.use("/users", userRouter)
rootRouter.use("/login", logInRouter)
rootRouter.use("/cinema-cineplex", cinemaRouter)
rootRouter.use("/movies", movieRouter)
module.exports = { rootRouter }
