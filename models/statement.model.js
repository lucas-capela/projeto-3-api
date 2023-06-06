const {model, Schema} = require('mongoose');

const statementSchema = new Schema({
    income:{
        type: [Schema.Types.ObjectId],
        ref: 'Income'
    },
    outcome:{
        type: [Schema.Types.ObjectId],
        ref: 'Outcome'
    },

    user:{
        type: [Schema.Types.ObjectId],
        ref: 'User'
    }

},{timestamps:true});

module.exports = model('Statement', statementSchema);