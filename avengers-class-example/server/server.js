const express = require('express')
const bodyParser = require("body-parser")
const controllers = require("./controllers")

const app = express()

app.use(bodyParser.json())

app.get("/api/avengersassemble", controllers.avengersAssemble)



app.listen(4000, () => {
    console.log("Server listening on port 4000")
})