const mongoose =  require('mongoose')

const breakactivitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    breakactivityType: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('BreakActivity', breakactivitySchema)