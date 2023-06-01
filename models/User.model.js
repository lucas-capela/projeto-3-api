const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required:[true],
        unique: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        unique:true,
        trim:true,
        lowercase: true
    },
    passwordHash:{
        type: String,
        required: true
    },
    income:{
        type: [Schema.Types.ObjectId],
        ref: 'Income'
    },
    outcome:{
        type: [Schema.Types.ObjectId],
        ref: 'Outcome'
    }
},{timestamps:true});

module.exports = model('User', userSchema);