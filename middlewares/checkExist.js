
const checkExist = (Model) => async (req, res, next) => {
    const { id } = req.params
    try {
        const findItem = await Model.findByPk(id)
        if (findItem) {
            next()
        } else {
            res.status(404).send(`Not found item with id = ${id}`)
        }
    } catch (error) {
        res.status(500).send(`error middleware checkexist : ${error}`)
    }
}

module.exports = checkExist