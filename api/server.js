var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var objectId = require('mongodb').ObjectId;
var multiparty = require('connect-multiparty');
var expressSession = require('express-session'); //Criar sessões autenticadas

var app = express();

//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multiparty());
app.use(expressSession({
	secret:'lkdjfldkjfldksjfdljf',
	resave: false,
	saveUninitialized: false
}));

var port = 8080;
app.listen(port);

var db = new mongodb.Db(
	'votasp',
	new mongodb.Server('localhost', 27017, {}),
	{}
);

console.log("Servidor HTTP está escutando na porta+ " + port);

app.get('/api', function(req, res){

	console.log("Passei pelo app/get");
	res.setHeader("Access-Control-Allow-Origin","*");
	db.open( function(err, mongoclient){
		mongoclient.collection('usuarios', function(err, collection){
			collection.find().toArray(function(err, results){
				if(err){
					res.json(err);
				} else{
					res.json(results);
				}
				mongoclient.close();

			}); 
		});
	});
});

//URI + verbo HTTP
app.post('/api', function(req, res){

	console.log("Passei pelo app/post");
	res.setHeader("Access-Control-Allow-Origin","*");
	var dados = req.body; //body-parser fazer isso
	
	console.log(dados); 
	
	db.open(function(err, mongoclient){
		mongoclient.collection('usuarios', function(err, collection){
			collection.insert(dados, function(err, records){
				if(err){
					res.json(err);
				} else{
					res.json(records);
				}
				mongoclient.close();
			});
		});
	});

});

//Recuperando um documento específico (by id)
app.get('/api/:id', function(req, res){

	res.setHeader("Access-Control-Allow-Origin","*");
	//res.setHeader("Access-Control-Allow-Origin","http://www.sergio.com.br:80");
	var id = objectId(req.params.id); 
	db.open( function(err, mongoclient){
		mongoclient.collection('usuarios', function(err, collection){
			collection.find({_id : id}).toArray(function(err, results){
				if(err){
					res.json(err);
				} else{
					res.json(results);
				}
				mongoclient.close();
			}); 
		});
	});
});

//Atualiza um registro
app.put('/api/:id', function(req, res){
	var id = objectId(req.params.id); 
	db.open( function(err, mongoclient){
		mongoclient.collection('usuarios', function(err, collection){
			collection.update(
				{ _id : id },
				{ $set : {nome : req.body.nome}},
				{}, //Atualiza somente um documento
				function(err, records){
					if(err){
						res.json(err);
					} else {
						res.json(records);
					}
					mongoclient.close();
				}
			);
		});
	});
});

//Apaga um registro
app.delete('/api/:id', function(req, res){
	var id = objectId(req.params.id); 
	db.open( function(err, mongoclient){
		mongoclient.collection('usuarios', function(err, collection){
			collection.remove({ _id : id }, function(err, records){
				if(err){
					res.json(err);
				} else{
					res.json(records);
				}
				mongoclient.close();

			});
		});
	});
});

app.post('/autenticar', function(req, res){

	usuario = req.body;
	console.log(usuario);
	console.log("Passei pelo app/autenticar");
	res.setHeader("Access-Control-Allow-Origin","*");

	db.open( function(err, mongoclient){
		mongoclient.collection('usuarios', function(err, collection){
			collection.find(usuario).toArray(function(err, results){
				if(err){
					res.json(err);
				} else{
					if(results[0] != undefined){
						res.json({autorizado:true});
					} else{
						res.json({autorizado:false});
					}
				}
				mongoclient.close();
			}); 
		});
	});
});

app.get('/questoes', function(req, res){

	res.setHeader("Access-Control-Allow-Origin","*");
	db.open( function(err, mongoclient){
		mongoclient.collection('questoes', function(err, collection){
			collection.find().toArray(function(err, results){
				if(err){
					res.json(err);
				} else{
					res.json(results);
				}
				mongoclient.close();

			}); 
		});
	});
});