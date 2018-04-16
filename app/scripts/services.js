'use strict';

angular.module('votaspApp')
.constant("baseURL", "http://localhost:4000/")
.factory('usuariosFactory', ['$resource', 'baseURL', function($resource, baseURL){

	var usuariosFac = {};

	usuariosFac.getUsuarios = function(){
		return $resource(baseURL+"usuarios/:id", null, {'update':{method:'PUT' }});
	};


	// Como o resource não precisamos mais do método abaixo pois o $resource cuida disso pra gente. Ele retorna tanto o número de usuários total quanto individual. 
	/*usuariosFac.getUsuario = function(indice){
		return $http.get(baseURL+"usuarios/"+indice);

		//usuarios[indice];
	};*/

	return usuariosFac;

}]);