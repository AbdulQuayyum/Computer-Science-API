const mongoose = require('mongoose')
const slugify = require('slugify');

const CourseSchema = new mongoose.Schema({
    course_code: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "Please enter a course code"],
        maxlength: [6, "Course code can not be more 6 characters"]
    },
    slug: String,
    course_name: {
        type: String,
        trim: true,
        required: [true, "Please enter a course name"],
        unique: true,
        maxlength: [200, "Course name can not be more than 200 characters"]
    },
    unit: {
        type: Number,
        required: [true, "Please enter how many unit, the course is"]
    },
    status: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    }
})

// Create bootcamp slug from the name
CourseSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

module.exports = mongoose.model("Course", CourseSchema)