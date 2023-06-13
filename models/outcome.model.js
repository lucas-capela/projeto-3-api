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
    },
    
    month:{
        type: String,
        enum: ['01','02','03','04','05','06','07','08','09','10','11','12'],
        required: true
    },

    year:{
        type: String,
        enum: ['2022','2023','2024'],
        required: true
    },
    user:{
        type: [Schema.Types.ObjectId],
        ref: 'User',
        required:true
    }
  
},{timestamps:true});

module.exports = model('Outcome', outcomeSchema);