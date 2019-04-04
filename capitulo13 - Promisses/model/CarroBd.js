const mysql = require('mysql');

// Classe CarroDB
class CarroDB {
	// Função para conectar no banco de dados.
	static connect() {
		// Cria a conexão com MySQL
		let connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'root',
		  password : '123456789',
		  database : 'livro'
		});

		// Conecta no banco de dados	
		connection.connect();
		return connection;
	}
	
	//alterando as funções adicionando promisses a cada uma delas.
	//alteração baseia-se em passar o retorno de reject caso de algum erro ou resolve caso de tudo certo


	// Retorna a lista de carros
	static getCarros() {
		return new Promise(function(resolve, reject){
			
			let connection = CarroDB.connect()

			// Cria uma consulta
			let sql = "select * from carro";
			let query = connection.query(sql, function (error, results, fields) {
				if (error){
					//erro
					reject(error);
				}
				else{
					//sucess
					resolve(results);
				}
			});
			// Fecha a conexão.
			connection.end();
		});
	}


	// Retorna a lista de carros por tipo do banco de dados
	static getCarrosByTipo(tipo) {

		return new promisse(function(resolve, reject){

			let connection = CarroDB.connect()
		// Cria uma consulta
		let sql = "select id,nome,tipo from carro where tipo = '" + tipo + "'";
		let query = connection.query(sql, function (error, results, fields) {
			if (error){
				//erro
				reject(error);
			}
			else{
				//sucess
				resolve(results);
			}
		});
		// Fecha a conexão.
		connection.end();
		});
	}


	// Retorna a lista de carros por id
	static getCarroById(id) {

		return new promisse(function(resolve, reject){

			let connection = CarroDB.connect()
		// Cria uma consulta
		let sql = "select * from carro where id=?";
		let query = connection.query(sql, id, function (error, results, fields) {
			if (error){
				reject(error);
			}
			else{
				if(results.length == 0)
				reject(error('nenum erro encontrado!'));
				return
			}
			
			// Encontrou o carro
			let carro = results[0];
			// Retorna o carro pela função de callback
			resolve(carro);
		});
		// Fecha a conexão.
		connection.end();
		});
	}


	// Salva um carro no banco de dados.
	// Recebe o JSON com dados do carro como parâmetro.
	static save(carro) {

		return new promisse(function(resolve, reject){
			let connection = CarroDB.connect()

		// Insere o carro
		let sql = "insert into carro set ? ";
		let query = connection.query(sql, carro, function (error, results, fields) {
			if (error){
				reject(error);
			}
			else{
			// Atualiza o objeto carro do parametro com o "id" inserido
			carro.id = results.insertId;
			// Retorna o carro pela função de callback
			resolve(carro);
			}
		});
		// Fecha a conexão.
		connection.end();
		});
	}


	// Atualiza um carro no banco de dados.
	static update(carro) {

		return new promisse(function(resolve, reject){
			
		let connection = CarroDB.connect()

		// SQL para atualizar o carro
		let sql = "update carro set ? where id = ?";
		// Id do carro para atualizar
		let id = carro.id;
		let query = connection.query(sql, [carro, id], function (error, results, fields) {
			if (error){
				reject(error);
			}
			else{
				resolve(carro);
			}
		});
		// Fecha a conexão.
		connection.end();
		});
	}

	
	// Deleta um carro no banco de dados pelo id.
	static deleteById(id) {

		return new promisse(function(resolve, reject){
			
		let connection = CarroDB.connect()

		// SQL para deletar o carro
		let sql = "delete from carro where id = ?";
		// Id do carro para deletar
		let id = carro.id;
		let query = connection.query(sql, id, function (error, results, fields) {
			if (error){
				reject(error);
			}
			else{
				resolve(results.affectedRows);
			}
		});
		// Fecha a conexão.
		connection.end();
		})
	}
};

module.exports = CarroDB;