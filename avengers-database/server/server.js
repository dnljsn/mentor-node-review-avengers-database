const express = require('express')
const bodyParser = require("body-parser")

const controllers = require("./controllers")

const app = express();

app.use(bodyParser.json())

app.get("/api/avengers", controllers.avengersAssemble)
app.get("/api/avengers/:index", controllers.avenger)
app.post("/api/avengers", controllers.create)




app.listen(4000, () => {
    console.log("Server listening on port 4000")
})