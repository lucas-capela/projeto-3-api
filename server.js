const app = require('./app');
const cors = require('cors');

const PORT = process.env.PORT || 4003;

app.use(cors());

app.listen(PORT, () => {
    console.log(`Servidor escutando a porta ${PORT}`);
});
