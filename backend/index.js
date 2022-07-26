const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const { itemsRouter } = require("./src/routes/items-router")

const app = express()
const PORT = process.env.PORT || 9000

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.get("/", (_, res) => {
    res.send("it works")
})

app.use("/items/", itemsRouter)

app.use((_, res) => {
    res.status(404).json({ error: "Not found" })
})

app.listen(PORT, () => console.log("listening on port " + PORT))