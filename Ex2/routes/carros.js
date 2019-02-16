
var express = require('express');
var app = express.Router();
const CarroDB = require('../Model/CarrosBD');


// GET em /carros
Router.get('/carros', function (req, res) {
	CarroDB.getCarros(function(carros) {
		res.json(carros)
	});
})


// GET em /carros/id
Router.get('/carros/:id(\\d+)', function (req, res) {
	let id = req.params.id;
	CarroDB.getCarroById(id, function(carro) {
		res.json(carro)
	});
})


// DELETE em /carros/id
Router.delete('/carros/:id(\\d+)', function (req, res) {
	let id = req.params.id;
	console.log("deletar arro " + id);
	CarroDB.deleteById(id, function(affectedRows) {
		res.json ({ msg: 'Carro deletado com sucesso.' })
	});
})


// GET em /carros/tipo (classicos, esportivos, luxo)
Router.get('/carros/:tipo', function (req, res) {
	let tipo = req.params.tipo;
	CarroDB.getCarrosByTipo(tipo, function(carros) {
		res.json(carros)
	});
})


// POST para salvar um carro
Router.post('/carros', function (req, res) {
	// Carro enviado no formato JSON
	let carro = req.body;
	CarroDB.save(carro, function(carro) {
		res.json(carro)
	});
})


// PUT para atualizar um carro
Router.put('/carros', function (req, res) {
	// Carro enviado no formato JSON
	let carro = req.body;
	CarroDB.update(carro, function(carro) {
		// res.json(carro)
		res.json ({ msg: 'Carro atualizado com sucesso.' })
	});
})

//exportar as rotas para usar em um outro arquivo
module.exports = Router();