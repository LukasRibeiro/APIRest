const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//configurando para ler dados do POST por form-urlencode e application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configurando uma rota raiz
app.get('/', function(req, response){
    res.send("API de carro ");

});

//GET em /carros
app.get('/carros', function(req, res){
    res.send("listar todos os carros aqui ");
});

//GET em /carros/esportivos
app.get('/carros/:tipo', function(req, res){
    let tipo = req.params.tipo;
    res.send("Lista de carros: " + tipo);
});

//inicia servidor
let server = app.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().address;
    console.log('servidor iniciado em http://%s:%s', host, port);
});



