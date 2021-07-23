
const express = require('express');
const { rootRouter } = require('./routers/rootRouter');
const app = express()

app.use(express.json())
app.use("/api", rootRouter)

const path = require("path");
const pathPublicDirectory = path.join(__dirname + "/public")
app.use("/public", express.static(pathPublicDirectory))

const port = 2021;
app.listen(port, () => {
    console.log(`App is running port ${port}`);
})
