const mongoose =  require('mongoose');

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Interval: {
        type: int,
        required: true
    },
    Yoga: {
        type: Boolean,
        required: true
    },
    Entertainment: {
        type: Boolean,
        required: true
    },
    Education: {
        type: Boolean,
        required: true
    },
    Exercize: {
        type: Boolean,
        required: true
    }

});

module.exports = mongoose.model('User', UserSchema);