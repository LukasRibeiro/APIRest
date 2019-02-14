const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const carrobd = require('./carrosBD');

//configurando para ler dados do POST por form-urlencode e application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send("API dos Carros");
})

//GET em /carros
app.get('/carros', function(req, res){
    carrobd.getCarros(function(carros){
        res.json(carros);
    });
});

//GET em /carros/tipo para retornar todo o tipo de carros (esportivos, luxo, classicos)
app.get('/carros/:tipo', function(req, res){
    let tipo = req.params.tipo;
    carrobd.getCarroById(tipo, function(carros){
        res.json(carros);
    });
});

//POST para salvar um carro
app.post('/carros', function(req, res){
    //carro enviado no formato JSON
    let carro = req.body;
    carrobd.save(carro, function(carro){
        res.json(carro);
    });
});

//PUT para atualizar um carro
app.put('/carros', function(req, res){
    //carro enviado no formato JSON
    let carro = req.body;
    carrobd.update(carro, function(carro){
        res.json(carro);
    });
});

//inicia servidor
let server = app.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log('servidor iniciado em http://%s:%s', host, port);
});
