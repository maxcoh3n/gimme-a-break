const mongoose =  require('mongoose');

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Interval: {
        type: Number,
        default: 60*60
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
    Fitness: {
        type: Boolean,
        default: 1
    }

});

module.exports = mongoose.model('squirrel', UserSchema);