const {Schema, model} = require('mongoose');

    
const incomeSchema = new Schema({
    description: {
        type: String,
        required:[true],
    },
    value: {
        type: Number,
        required:[true]
    }
  
  
},{timestamps:true});

module.exports = model('Income', incomeSchema);