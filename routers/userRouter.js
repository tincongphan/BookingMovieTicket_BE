
const express = require('express');
const { User } = require("../models")
const { createUser, getListUser, userDetail, userDelete, userUpdate, uploadAvatar } = require('../controllers/userController');
const checkExist = require('../middlewares/checkExist');
const { isAuthenticate, authorize } = require('../middlewares/authenticate');
const { upload_Middleware } = require('../middlewares/uploadAvatar');

const userRouter = express.Router();
// create user
userRouter.post("/", createUser)
// get list user
userRouter.get("/", getListUser)
// user detail 
userRouter.get("/:id", checkExist(User), userDetail)
// user delete 
userRouter.delete("/:id", isAuthenticate, authorize, checkExist(User), userDelete)
// user update 
userRouter.put("/:id", checkExist(User), userUpdate)
// upload avatar
userRouter.post("/avatar", isAuthenticate, upload_Middleware(), uploadAvatar)

module.exports = { userRouter }