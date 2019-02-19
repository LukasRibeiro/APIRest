let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// Configura para ler dados do POST por form-urlencoded e application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
// middleware  para interceptar a request e mostrar a data atual
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });
*/

// Rotas
app.use('/api/carros', require('./routes/carros'));


//Tratamento de rotas para erros
app.get('/teste_erro', function(req,res){
    throw Error ('erro ninja muito loko');
});


//tratamento de erros 404
app.use(function(err, req, res, next){
    res.status(404);
    res.json({err:'caminho nao encontrado!'});
});

/*
// Rota para não encontrado '404' metodo diferente se de fazer em relação ao de cima
app.use(function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
  });
*/

//rota generica de erro 500
app.use(function(err, req, res, next){
    console.log(err.stack);
    res.status(500);
    res.json({err: 'erro de transação! '});

});

// Inicia o servidor
let server = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("Servidor iniciado em http://%s:%s", host, port)
});