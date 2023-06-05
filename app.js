// pacotes

require('dotenv/config');
const express = require('express');
const app = express();

// configuracoes 

require('./database');
require('./configs')(app);

// middlewares gerais


// rotas
app.use('/auth', require('./routes/auth.routes'));
app.use('/income', require('./routes/income.routes'));
app.use('/outcome', require('./routes/outcome.routes'));
// gerenciamento de erros

app.use((req,res)=>{
    res.status(404).json('Nao encontrado')
});


module.exports = app; 