const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


const app = express();

mongoose.connect('Link para conectar no banco MongoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors()); //{ origin: 'http:localhost:3000' } =>Foi liberado o acesso externo para todo tipo de aplicação.
app.use(express.json()); // Com o use, todas as rotas utilizarão o json. Poderia especificar para utilizar em apenas rotas get ou post, usando get.use()
app.use(routes); //Deve vir após o express configurando json

app.listen(3333);
