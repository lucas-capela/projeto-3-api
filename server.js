const app = require('./app');
const cors = require('cors');
const dbCon = require('./database');
const PORT = process.env.PORT || 4003;

app.use(cors());
dbCon()
.then(()=> {
    app.listen(PORT, () => {
        console.log(`Servidor escutando a porta ${PORT}`);
    });
})

