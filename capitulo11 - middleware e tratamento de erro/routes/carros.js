const express = require('express');
const router = express.Router();
const CarroDB = require('../model/Carros.BD');

// GET em /carros
router.get('/carros',  (req, res, next) => {
    CarroDB.getCarros( (error, carros) => {
        if (error) {
            // console.log("Erro de SQL: " + error.message);
            return next(error);
        }
        res.json(carros)
    });
});

// GET em /carros/id
router.get('/carros/:id(\\d+)', (req, res) => {
    let id = req.params.id;
    CarroDB.getCarroById(id, (carro) => {
        res.json(carro)
    });
});

// DELETE em /carros/id
router.delete('/carros/:id(\\d+)', (req, res) => {
    let id = req.params.id;
    console.log("deletar arro " + id);
    CarroDB.deleteById(id, function (affectedRows) {
        res.json({msg: 'Carro deletado com sucesso.'})
    });
});


// GET em /carros/xxx
router.get('/carros/:tipo', (req, res) => {
    let tipo = req.params.tipo;
    CarroDB.getCarrosByTipo(tipo, (carros) => {
        res.json(carros)
    });
});

// POST para salvar um carro
router.post('/carros', (req, res) => {
    // Carro enviado no formato JSON
    let carro = req.body;
    CarroDB.save(carro, (carro) => {
        res.json(carro)
    });
});

// PUT para atualizar um carro
router.put('/carros', (req, res) => {
    // Carro enviado no formato JSON
    let carro = req.body;
    CarroDB.update(carro, (carro) => {
        // res.json(carro)
        res.json({msg: 'Carro atualizado com sucesso.'})
    });
});

// // Rota genérica de erro '500'
// router.use(function (err, req, res, next) {
//     res.status(500);
//     res.json({erro: "Erro: " + err.message});
// });

module.exports = router;