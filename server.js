const express = require("express")
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")
const {errorHandler} = require("./middleware/errorMiddleware")
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", require("./routes/listRoutes"))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})