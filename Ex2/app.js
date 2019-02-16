const express = require('express');
const app = express();
const bodyparse = require('body-parser');

//configura para ler dados do POST por form-urlencoded e application/json
app.use(bodyparse.urlencoded({extended: false}));
app.use(bodyparse.json);

//rotas
app.use('/api', require('./routes/carros'));

//inicia o servidor
let server = app.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log('servidor iniciado em http://%s:%s', host, port);
});