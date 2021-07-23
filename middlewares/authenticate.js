
const jwt = require("jsonwebtoken")

// xác thực đăng nhập hay chưa
const isAuthenticate = (req, res, next) => {
    const token = req.header("token")
    const secrectKey = "MySQL"
    try {
        const decoded = jwt.verify(token, secrectKey)
        req.user = decoded
        next()
    } catch (error) {
        res.status(400).send(`You need logIn ${error}`)
    }
}

// phân quyền
const authorize = (req, res, next) => {
    const { role } = req.user;
    if (role === "admin" || role === "manager") {
        next()
    } else {
        res.status(400).send("You not allow")
    }
}
module.exports = { isAuthenticate, authorize }