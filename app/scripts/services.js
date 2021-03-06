'use strict';

angular.module('votaspApp')
.constant("baseURL", "http://localhost:8080/")
.factory('usuariosFactory', ['$resource', '$http', 'baseURL', function($resource, $http, baseURL){

	var usuariosFac = {};

	usuariosFac.getUsuarios = function(){
		//return $resource(baseURL+"usuarios/:id", null, {'update':{method:'PUT' }});
		return $resource(baseURL+"api/:id", null, {'update':{method:'PUT' }});
		//return $resource(baseURL+"api/:id");
	};


	// Como o resource não precisamos mais do método abaixo pois o $resource cuida disso pra gente. Ele retorna tanto o número de usuários total quanto individual. 
	usuariosFac.getUsuario = function(indice){
		return $http.get(baseURL+"api/"+indice);
	};

	usuariosFac.postUsuario = function(data){
		return $http.post(baseURL+"api/", data );
	};

	usuariosFac.removeUsuario = function(indice){
		return $http.delete(baseURL+"api/"+indice);
	};

	usuariosFac.autenticarUsuario = function(data){
		console.log("cheguei no services autenticar");
		console.log(data);
		return $http.post(baseURL+"autenticar/", data);
	};

	return usuariosFac;

}])
.factory('questoesFactory', ['$resource', '$http', 'baseURL', function($resource, $http, baseURL){

	var questoesFac = {};
	questoesFac.getQuestoes = function(){
		return $http.get(baseURL+"questoes/");
	};

	return questoesFac;
}])
;