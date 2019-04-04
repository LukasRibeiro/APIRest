//funcao para auxiliar no uso de aysinc e await

const exec = fn =>{
    (req, res,next) =>{
        promise.resolve(fn(req,res,next))
        .catch(function (error) {
            next(error);
        })
    }
}

module.exports = exec;

/**
 * O problema de usar aysinc e await e que temos que tratar sempre os erros com "try, catch" o que deixa o codigo trabalhoso
 * e repetitivo de fazer. 
 * Esta funcao é uma funcao auxiliar que encapsulará esse tratamento de erro, e se for nescessario chamar a funcao next(erro)
 * 
 * 
 * exemplo de uso no arquivo carros.js
 * 
 */