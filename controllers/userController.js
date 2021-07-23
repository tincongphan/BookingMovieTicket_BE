const bcryptjs = require('bcryptjs');
const { User, Ticket } = require("../models")
// create user
const createUser = async (req, res) => {
    const { name, email, password, phone, avatar, role } = req.body;
    try {
        // res.send({ name, email, password, phone, avatar, role })
        const user = await User.findOne({ where: { email } })
        if (user) {
            res.status(200).send("User existed")
        } else {
            const salt = bcryptjs.genSaltSync(5)
            const hashPassword = bcryptjs.hashSync(password, salt)
            const newUser = await User.create({ name, email, password: hashPassword, phone, avatar, role })
            res.status(200).send(newUser)
        }
    } catch (error) {
        res.status(500).send(`Error create user controller : ${error}`)
    }
}
// get list user
const getListUser = async (req, res) => {
    try {
        const listUser = await User.findAll()
        res.status(200).send(listUser)
    } catch (error) {
        res.status(500).send(`Error get list user controller : ${error}`)
    }
}
// user detail
const userDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const userDetail = await User.findOne({ where: { id } })
        res.status(200).send(userDetail)
    } catch (error) {
        res.status(500).send(`Error user detail controller : ${error}`)
    }
}
// user delete 
const userDelete = async (req, res) => {
    const { id } = req.params;
    try {
        await Ticket.destroy({ where: { userId: id } })
        await User.destroy({ where: { id } })
        res.status(200).send("Deleted successfully")
    } catch (error) {
        res.status(500).send(`Error delete user controller ${error}`)
    }
}

// user update
const userUpdate = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, avatar } = req.body;
    try {
        await User.update({ name, email, phone, avatar }, { where: { id } })
        res.status(200).send("Update successfully")
    } catch (error) {
        res.status(500).send(`Error update user controller ${error}`)
    }
}
// upload avatar
const uploadAvatar = async (req, res) => {
    const { path } = req.file
    const { id } = req.user;
    try {
        const userAvatar = await User.findByPk(id)
        userAvatar.avatar = "http://localhost:2021/" + path
        await userAvatar.save()
        res.status(200).send("Upload Successfully")
    } catch (error) {
        res.status(500).send(`Error upload avatar controller ${error}`)
    }
}

module.exports = {
    createUser,
    getListUser,
    userDetail,
    userDelete,
    userUpdate,
    uploadAvatar

}
