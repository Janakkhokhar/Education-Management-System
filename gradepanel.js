
const mongoose = require('mongoose');

const GradeSchema = mongoose.Schema({
    courseId: {
        type: mongoose.Schema.ObjectId,
        ref: 'course',
    },
    submission: {
        type: String
    },
    grade: {
        type: String
    },
    
})

const grade = mongoose.model("grade", GradeSchema);


module.exports = grade;