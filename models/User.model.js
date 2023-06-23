const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required:[true],
        unique: true,
        trim:true
    },
    name:{
    type:String,
    require:[true]
    },
    gender:{
        type: String,
        required:[true],
        trim:true,
        enum:["Masculino","Feminino","Não-binário","Outro","Prefiro não responder"]
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
    }
},{timestamps:true});

module.exports = model('User', userSchema);