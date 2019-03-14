const carroBD = require('./model/CarroBd');

async function teste(){
    let carros = await carroBD.getCarros();
    console.log(JSON.stringify(carros));
};

teste();