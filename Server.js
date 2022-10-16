const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require("./Config/DB")
const ErrorHandler = require("./Middleware/Error")

// Load environment variables 
dotenv.config({ path: "./Config/Config.env" })

// Connect to Database
connectDB()
//Rout files
const Courses = require('./Routes/Courses')

const app = express()

//Body Parser
app.use(express.json())

// Developer is logging Middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

//Mount routers
app.use("/api/v1/Courses", Courses)

app.use(ErrorHandler)
 
const PORT = process.env.PORT || 7500

const Server = app.listen(
    PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on ${PORT}`));  

// Handle unhandled promise rejection errors

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`)
    //Close server and exit process 
    Server.close(() => process.exit(1))
})