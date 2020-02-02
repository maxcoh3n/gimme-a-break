const mongoose =  require('mongoose');

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Interval: {
        type: Number,
        required: true
    },
    Yoga: {
        type: Boolean,
        default: 1
    },
    Entertainment: {
        type: Boolean,
        default: 1
    },
    Education: {
        type: Boolean,
        default: 1
    },
    Exercise: {
        type: Boolean,
        default: 1
    }

});

module.exports = mongoose.model('User', UserSchema);