
const express = require('express');
const log_In = require('../controllers/loginController');
const logInRouter = express.Router()

logInRouter.post("/", log_In)

module.exports = { logInRouter }