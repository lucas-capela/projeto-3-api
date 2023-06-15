// pacotes

require('dotenv/config');
const express = require('express');
const app = express();

// configuracoes 

require('./database');
require('./configs')(app);

// middlewares gerais
const { isAuthenticated } = require('./middlewares/jwt.middleware');

// rotas
app.use('/user', require('./routes/user.routes'));
app.use('/auth', require('./routes/auth.routes'));
app.use(isAuthenticated);
app.use('/income', require('./routes/income.routes'));
app.use('/outcome', require('./routes/outcome.routes'));

app.use('/statement', require('./routes/statement.routes'))

// gerenciamento de erros

app.use((req,res)=>{
    res.status(404).json('Nao encontrado')
});


module.exports = app; 