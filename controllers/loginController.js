const { User } = require("../models")
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const log_In = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userLogin = await User.findOne({ where: { email } })
        if (userLogin) {
            const isAuth = bcryptjs.compareSync(password, userLogin.password)
            if (isAuth) {
                const { id, name, role, email } = userLogin;
                const payload = { id, name, role, email }
                const secrectKey = "MySQL"
                const token = jwt.sign(payload, secrectKey)
                res.status(200).send({ token })
            } else {
                res.status(400).send("Password Invalid")
            }
        } else {
            res.status(400).send("Email Invalid")
        }
    } catch (error) {
        res.status(500).send(`Error log_In controller ${error}`)
    }
}

module.exports = log_In;