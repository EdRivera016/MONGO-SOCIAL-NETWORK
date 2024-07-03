const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    freinds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

userSchema.virtual('friendCount').get(function() {
    return this.freinds.length;
});

const User = mongoose.model('User', userSchema);
module.exports = User;