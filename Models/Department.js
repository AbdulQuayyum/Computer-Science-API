const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema({
   department: {
      type: String,
      required: [true, "Please add department name"],
      unique: true,
      trim: true,
      maxlength: [50, "departmwnt can not be more 100 characters"]
   },
   slug: String,
   faculty: {
      type: String,
      required: [true],
      enum: [
         "Agriculture",
         "Arts and Humanities",
         "Communication and Information Science",
         "Education",
         "Engineering",
         "Law",
         "Health Science",
         "Science",
         "Social Sciences"
      ],
      maxlength: [500, "Faculty name can not be more 100 characters"]
   },
   years: {
      type: Number,
      max: [10, "Maximum years you can use is 10"]
   },
   address: {
      type: String,
      required: [true, 'Please add an address']
   },
   location: {
      // GeoJSON Point
      type: {
         type: String,
         enum: ['Point']
      },
      coordinates: {
         type: [Number],
         index: '2dsphere'
      },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String
   },
   HOD: {
      type: String,
      required: [true, 'Please add the HOD name'],
      maxlength: [500, 'HOD name can not be more than 500 characters']
    },
    careers: {
      type: String,
      required: [true, 'Please add a career vpath'],
      maxlength: [500, 'career path can not be more than 500 characters']
    }
})