const app = require('./app');

const PORT = process.env.PORT || 4003;

app.listen(PORT, ()=> {
    console.log(`Servidor escutando a porta ${PORT}`)
});