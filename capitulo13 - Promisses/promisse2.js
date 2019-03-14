const carroBD = require('./model/CarroBd');

function teste(){
    //promisse
    let promisse = carroBD.getCarros();
    promisse.then(function(carros){
        console.log(JSON.stringify(carros));
    });
}

teste();