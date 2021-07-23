
const multer = require('multer');
const upload_Middleware = (req, res, next) => {

    // cấu hình nơi để lưu hình
    const storage = multer.diskStorage({
        // cấu hình đường dẫn thư mục dể lưu file
        destination: function (req, file, cb) {
            cb(null, "./public/image/avatar")
        },
        //  cấu hình tên file
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}_${file.originalname}`)
        }
    })

    const upload = multer({ storage })
    return upload.single("avatar")
}

module.exports = { upload_Middleware }