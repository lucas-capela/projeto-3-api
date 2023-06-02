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


// gerenciamento de erros

app.use((req,res)=>{
    res.status(404).json('Nao encontrado')
});


module.exports = app; 