const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// Load Environment Variables
dotenv.config({ path: "./Config/Config.env" })

// Load Models
const Course = require("./Models/Courses")

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: false
})

// Read Json files
const Courses = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/courses.json}`, 'utf-8')
)

// Import into DB
const importData = async () => {
    try {
        await Course.create(courses)
        console.log("Data successfully imported")
        process.exit()
    } catch (err) {
        console.error(err)
    }
}

// Delete Data
const deleteData = async () => {
    try {
        await Course.deleteMany()
        console.log("Data successfully deleted")
        process.exit()
    } catch (err) {
        console.error(err)
    }
}

if (process.argv[2] === '-i') {
    importData();
  } else if (process.argv[2] === '-d') {
    deleteData();
  }