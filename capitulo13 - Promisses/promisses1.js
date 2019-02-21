const CarroDB = require('./model/CarroBd');

function teste() {
    // callback
    CarroDB.getCarros(function (error,carros) {
        console.log(JSON.stringify(carros) )
    })

    /*
    // promise
    let promisse = CarroDB.getCarros();
    promisse.then(function (carros) {
        console.log(carros.length)
    })*/
}

teste()
