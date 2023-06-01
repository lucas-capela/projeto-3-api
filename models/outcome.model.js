const {Schema, model} = require('mongoose');

    
const outcomeSchema = new Schema({
    description: {
        type: String,
        required:[true],
    },
    value: {
        type: Number,
        required:[true]
    },
    expenseType:{
        type: String,
        enum: ['Housing', 'Utilities', 'Grocery', 'Savings','Other', 'Education', 'Debt Payments', 'Miscellaneous Expenses', 'Transportation'],
        required: true
    }
  
},{timestamps:true});

module.exports = model('Outcome', outcomeSchema);